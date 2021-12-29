/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 16:17:12
 * @Description: 添加 webpack 配置
 */
const path = require('path');
// const custom = require('../webpack.config.js')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (webpackConfig, { configType }) => {
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   use: [
    //     {
    //       loader: require.resolve('babel-loader'),
    //       options: {
    //         presets: [require.resolve('babel-preset-react-app')],
    //       },
    //     },
    //   ],
    // });

    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // 配置路径别名
    // config.resolve.alias = {
    //   '@': path.resolve(__dirname, 'src'),
    // };
    webpackConfig.resolve.plugins = [
      ...(webpackConfig.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: webpackConfig.resolve.extensions,
      }),
    ];
    // Make whatever fine-grained changes you need
    webpackConfig.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: [path.resolve(__dirname, '../'), /[\\/]node_modules[\\/].*antd/],
    });

    return webpackConfig;
    // return {
    //   ...config,
    //   module: { ...config.module, rules: custom.module.rules },
    // }
  },
};
