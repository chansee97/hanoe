import {
  FC,
  ReactNode
} from 'react';
import './style.scss'
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = props => {
  return (
    <div className="layout">
      <header>
        <a href={`/hooks`}>hooks</a>
        <a href={`/components`}>组件</a>
        <a href={`/about`}>关于</a>
      </header>
      <aside>sider</aside>
      <main>
        {props.children}
      </main>
    </div>
  )
}