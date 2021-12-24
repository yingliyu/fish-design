import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';

import './index.less';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<any> = ({
  primary,
  type,
  backgroundColor,
  size,
  label,
  danger,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <div className="warpper">
      <AntButton
        type={type}
        size={size}
        danger={danger}
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </AntButton>
    </div>
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
