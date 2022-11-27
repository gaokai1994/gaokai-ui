import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'gaokai-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  mfsu: {},
  dynamicImport: {},
  navs: [
    // null,
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'http://blog.gaokai.fun',
    },
  ],
  // base: '/gaokai-ui',
  // publicPath: '/gaokai-ui/'
  // more config: https://d.umijs.org/config
});
