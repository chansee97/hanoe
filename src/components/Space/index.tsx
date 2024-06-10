import React from 'react'
import './style.scss'
import cs from 'classnames'
import { ConfigContext } from './ConfigProvider'

export type SizeType = 'small' | 'middle' | 'large' | number | undefined;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

export const Space: React.FC<SpaceProps> = props => {

  const { space } = React.useContext(ConfigContext);

  const {
    className,
    style,
    size = space?.size||'middle',
    direction = 'horizontal',
    align = 'center',
    split,
    wrap,
    ...rest
  } = props;

  const childNodes = React.Children.toArray(props.children);

  const nodes = childNodes.map((child: any, i) => {

    const key = (child && child.key) || `space-item-${i}`;

    return <>
      <div className='space-item' key={key}>
        {child}
      </div>
      {i < childNodes.length - 1 && split && <span className='space-split'>{split}</span>}
    </>
  });

  const mergedAlign = direction === 'horizontal' && align;

  const cn = cs(
    'space',
    `space-${direction}`,
    {
      [`space-align-${mergedAlign}`]: mergedAlign,
      'space-wrap': wrap,
    },

    className
  )


  const sizeStyles: React.CSSProperties = {};

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size])).map(item =>
        getNumberSize(item),
      ),
    [size]
  );

  sizeStyles.columnGap = horizontalSize;
  sizeStyles.rowGap = verticalSize;

  return <div
    className={cn}
    style={{
      ...sizeStyles,
      ...style
    }}
    {...rest}
  >
    {nodes}
  </div>
}
