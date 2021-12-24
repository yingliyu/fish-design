/*
 * @Author: ylyu
 * @Date: 2021-12-23 14:17:14
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-24 15:58:15
 * @Description:
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  // useEslintRc,
  addWebpackAlias
} = require('customize-cra');

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

const config = override(
  // 使用.eslintrc.js
  // 配置路径别名
  addWebpackAlias({
      '@': resolve(__dirname, 'src')
  }), // 更换主题配置
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEslintRc(),
  addLessLoader({
    // cssLoaderOptions: {
    //   modifyVars: { '@primary-color': '#7b6aff' },
    //   javascriptEnabled: true,
    //   cssModules: {
    //     localIdentName: '[path][name]__[local]--[hash:base64:5]',
    //   },
    // }
      lessOptions: {
        // strictMath: true,
        noIeCompat: true,
        modules: true,
        javascriptEnabled: true,
      modifyVars: { '@primary-color': '#7b6aff' },
      cssModules: {
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      },
    }
  }),
  // antd按需加载
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
  })
);

module.exports = config;

// const path = require('path');

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   console.log(env)
//    // 配置路径别名
//   config.resolve.alias = {
//       '@': path.resolve(__dirname, 'src'),
//   }
//   config.module.rules.push({
//     test: /\.less$/,
//     use: [
//       'style-loader',
//       'css-loader',
//       {
//         loader: 'less-loader',
//         options: {
//           lessOptions: {
//             javascriptEnabled: true,
//           },
//         },
//       },
//     ],
//     include: [path.resolve(__dirname, '../'), /[\\/]node_modules[\\/].*antd/],
//   });
//   return config;
// }

