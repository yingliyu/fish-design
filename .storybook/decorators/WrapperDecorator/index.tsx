/*
 * @Author: ylyu
 * @Date: 2021-12-23 10:48:53
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 10:50:04
 * @Description:
 */
import React from 'react'

const wrapperStyle: any = {
  padding: '20px 40px',
}

// 创建一个样式包裹的装饰器
const WrapperDecorator = (storyFn) => (
  <div style={wrapperStyle}>{storyFn()}</div>
)

export default WrapperDecorator
