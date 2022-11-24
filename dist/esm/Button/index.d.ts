import React, { ReactElement } from 'react';
import './index.less';
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
declare const Button: React.FC<ButtonProps>;
export default Button;
