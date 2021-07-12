/*
 * @Author: your name
 * @Date: 2021-07-10 18:19:29
 * @LastEditTime: 2021-07-12 15:16:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \maxin-component\src\components\Menu\subMenu.tsx
 */
import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'
import {IMenuItemProps} from './MenuItem'

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: React.ReactNode,
  disabled?: boolean
}

const SubMenu: React.FC<SubMenuProps> = ({index, title, className, disabled, children}) => {
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = useState(isOpened)
  const classes = classNames('menu-item sub-menu', className, {
    'is-active': context.index === index
  })
  
  /**
   * @description: 纵向菜单点击展开
   * @param {React} e
   * @return {*}
   */  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: any
  /**
   * @description: 横向菜单展开
   * @param {React} e
   * @param {boolean} toggle 菜单开关
   * @return {*}
   */  
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault()
    clearTimeout(timer)
    timer = setTimeout(() =>{
      setMenuOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? { 
    onClick: handleClick
  } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<IMenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        return new Error('Warning: SubMenu component has a childNode is not MenuItem')
      }
    })
    return (
      <ul className={subMenuClasses}>
        { childrenComponent }
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>{title}</div>
      { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
SubMenu.defaultProps = {
  disabled: false
}
export default SubMenu