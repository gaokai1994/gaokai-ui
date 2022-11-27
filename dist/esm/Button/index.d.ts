import React from 'react';
import './index.less';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
