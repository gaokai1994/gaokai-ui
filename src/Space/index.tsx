import React, { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import './index.less';

type SizeType = 'small' | 'large' | number;

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  wrap?: string;
  align?: string;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}
const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
  let {
    size = 'middle',
    className,
    direction,
    wrap = true,
    children,
    align = 'center',
    ...reset
  } = props;
  console.log('ch', reset);
  const prefix = 'gk-space';
  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  const [horizontralSize, verticalSize] = useMemo(
    () =>
      (Array.isArray(size) ? size : ([size, size] as [SizeType, SizeType])).map((item: SizeType) =>
        typeof item === 'string' ? spaceSize[item] : size || 0,
      ),
    [size],
  );
  console.log('@@', horizontralSize, verticalSize);
  const mergedAlign = direction === 'horizontal' ? 'center' : direction;

  const gapStyle: CSSProperties = {};
  gapStyle.columnGap = horizontralSize;
  gapStyle.rowGap = verticalSize;
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }
  if (direction === 'horizontal') {
    gapStyle.flexDirection = 'row';
  } else if (direction === 'vertical') {
    gapStyle.flexDirection = 'column';
  }
  if (align) {
    console.log('align', align);
    gapStyle.alignItems = align;
  }

  const cn = classNames(
    prefix,
    {
      [`${prefix}-align-${mergedAlign}`]: mergedAlign,
    },
    className,
  );
  let lastIndex = 0;
  let node = Array.isArray(children)
    ? children?.map((item, index) => {
        lastIndex = index;
        return (
          <div
            key={index}
            style={{
              alignItems: 'center',
            }}
          >
            {item}
          </div>
        );
      })
    : children;

  console.log('node', node, typeof children);
  return (
    <div
      className={cn}
      style={{
        ...gapStyle,
      }}
    >
      {node}
    </div>
  );
};

export default Space;
