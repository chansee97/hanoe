import { SVGAttributes, PropsWithChildren, forwardRef } from 'react'
import './style.scss'
import cs from 'classnames'
export * from './createFrontIconfont'
export * from './createIcon'

type BaseIconProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: string | string[];
  spin?: boolean;
};

export type IconProps = BaseIconProps & SVGAttributes<SVGElement>;

export const getSize = (size: IconProps['size']) => {
    if (Array.isArray(size) && size.length === 2) {
        return size as string[];
    }

    const width = (size as string) || '1em';
    const height = (size as string) || '1em';

    return [width, height];
};

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
  const {
    style,
    className,
    spin,
    size = '1em',
    children,
    ...rest
  } = props;

  const [width, height] = getSize(size);

  const cn = cs(
    'icon',
    {
      'icon-spin': spin
    },
    className
  )

  
  return (
    <svg className={cn} ref={ref} style={style} width={width} height={height} fill="currentColor" viewBox="0 0 1024 1024" {...rest}>
      {children}
    </svg>
  )
})
