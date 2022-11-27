import React from 'react';
import './index.less';
interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: string;
    wrap?: string;
    align?: string;
    className?: string;
    direction?: 'horizontal' | 'vertical';
    children?: React.ReactNode;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
