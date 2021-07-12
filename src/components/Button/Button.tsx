import React from "react";
import classNames from "classnames";

// 按钮大小
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

// 按钮类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// Partial<T>将属性定义为可选的参数（ts自带的）
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> // ts联合类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// 定义Button组件接受的属性
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: string;
  btnType?: ButtonType;
  children?: React.ReactNode,
  href?: string,
  style?: Object
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, btnType, size, disabled, children, href, style, ...resetProps } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a 
        className={classes}
        href={href}
        style={style}
        {...resetProps}
      >
        { children }
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        style={style}
        {...resetProps}
      >
        {children}
      </button>
    )
  }
  // return null
}
Button.defaultProps = {
  size: ButtonSize.Small,
  href: '',
  disabled: false,
  btnType: ButtonType.Default,
  style: {
    'marginRight': '10px'
  }
}
export default Button