import React, { ReactElement } from 'react';
import './index.less';
import classNames from 'classnames';
interface ButtonProps {
  /**
   * 按钮的显示大小
   * @default default
   */
  size: 'small' | 'large' | 'default';
  /**
   * 按钮的类型
   * @default default
   */
  type: 'default' | 'primary';
  children: ReactElement;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type = 'default', size = 'default' } = props;
  const prefix = 'gk-btn';
  const classes = classNames(prefix, {
    [`${prefix}-${type}`]: type,
  });
  return <button className={classes}>{props?.children}</button>;
};

export default Button;
