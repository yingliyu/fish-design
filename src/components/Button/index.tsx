/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 18:08:11
 * @Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';

import './index.css';
// npm install -D eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y  lint-staged
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<any> = ({
  primary,
  type,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  console.log(props);

  return (
    <AntButton
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </AntButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
