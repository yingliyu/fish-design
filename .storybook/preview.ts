/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 10:16:42
 * @Description:
 */
import {configure } from '@storybook/react';
// import WrapperDecorator from './decorators/WrapperDecorator';
import 'antd/dist/antd.less'; // 引入 antd 样式

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
// 将 welcome 文档说明置于顶部
const loaderFn = () => {
  const allExports = [require('../src/stories/Introduction.stories.mdx')]
  const req = require.context('../src/components', true, /\.stories\.tsx$/)
  req.keys().forEach((fname) => allExports.push(req(fname)))

  return allExports
}

// automatically import all files ending in *.stories.tsx
configure(loaderFn, module)

// 通过addDecorator添加插件
// addDecorator(WrapperDecorator);
