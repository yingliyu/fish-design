/*
 * @Author: ylyu
 * @Date: 2021-12-23 16:48:56
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 16:49:29
 * @Description:
 */
module.exports = {
  presets: [
    [
      '@babel/preset-react',
      '@babel/env',
      '@babel/react',
      {
        targets: {
          ie: '11',
        },
      },
    ],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    'add-module-exports',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-runtime',
  ],
};
