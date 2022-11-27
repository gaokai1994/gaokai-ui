---
nav:
  title: ABB
  path: /components
group:
  title: 基本组件
---

## Button

组件的类型:

```tsx
import React from 'react';
import { Button, Space } from 'gaokai-ui';

export default () => (
  <Space>
    组建的类型:
    <Button>default Button</Button>
    <Button type="primary">Primay Button</Button>
  </Space>
);
```

组件的大小:

```tsx
import React from 'react';
import { Button, Space } from 'gaokai-ui';

export default () => (
  <Space align="baseline">
    组建的大小:
    <Button type="primary" size="large">
      large Button
    </Button>
    <Button type="primary" size="middle">
      middle Button
    </Button>
    <Button type="primary" size="small">
      small Button
    </Button>
  </Space>
);
```

组件的禁用:

```tsx
import React from 'react';
import { Button, Space } from 'gaokai-ui';

export default () => (
  <Space align="baseline">
    组建的禁用:
    <Button disable>disable Button</Button>
  </Space>
);
```

组件 block:

```tsx
import React from 'react';
import { Button, Space } from 'gaokai-ui';

export default () => (
  <div>
    组件block:
    <Space align="baseline">
      <Button block>disable Button</Button>
      <Button block type="primary">
        disable Button
      </Button>
    </Space>
  </div>
);
```

<API></API>
