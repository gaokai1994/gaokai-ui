import React, { ReactElement } from 'react';
import './index.less';
import classNames from 'classnames';
interface ButtonProps {
  /**
   * 按钮的显示大小
   * @default default
   */
  size?: 'small' | 'large' | 'middle';
  /**
   * 按钮的类型
   * @default default
   */
  type?: 'default' | 'primary';
  children?: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   *   将宽度调整为父元素宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   *   目标元素禁用
   * @default false
   */
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  console.log('props', props);
  const { type = 'default', size = 'middle', block, disable, ...reset } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let { onClick } = props;

    // e.preventDefault();
    // return;

    (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
  };
  const prefix = 'gk-btn';
  const classes = classNames(prefix, {
    [`${prefix}-${size}`]: size,
    [`${prefix}-${type}`]: type,
    [`${prefix}-block`]: block,
    [`${prefix}-disabled`]: disable,
  });
  return (
    <button className={classes} {...reset} onClick={handleClick}>
      {props?.children}
    </button>
  );
};

export default Button;
