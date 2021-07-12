/*
 * @Author: maxin-wu
 * @Date: 2021-07-08 15:24:44
 * @LastEditTime: 2021-07-12 15:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \maxin-component\src\components\Menu\Menu.tsx
 */
/**
 * Menu组件
 */
import React, { createContext, useState } from "react";
import classNames from 'classnames'
import { IMenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: string) => void

interface IMenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallBack;
  children?: React.ReactNode;
  defaultOpenMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallBack;
  mode?: MenuMode,
  defaultOpenMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const Menu: React.FC<IMenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children, defaultOpenMenus} = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('menu', className, {
    'menu-horizontal': mode !== 'vertical',
    'menu-vertical': mode === 'vertical'
  })
  // 菜单点击的回调
  const handleClick = (index: string) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  // context传值
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenMenus
  }
  // React.Children
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IMenuItemProps>
      const {displayName} = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        return new Error('Warning: Menu component has a childNode is not MenuItem')
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenMenus: []
}

export default Menu