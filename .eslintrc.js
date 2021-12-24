/*
 * @Author: ylyu
 * @Date: 2021-12-23 15:22:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-24 15:57:58
 * @Description: 
 */

module.exports = {
  extends: 'react-app',
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2',
    },
  },
};
