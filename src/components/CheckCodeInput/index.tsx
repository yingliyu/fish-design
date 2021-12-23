/*
 * @Author: ylyu
 * @Date: 2021-12-23 10:54:02
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 10:54:02
 * @Description: 带发送验证码功能的input组件
 */
import React, { useState, FC } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import classNames from 'classnames';

export interface InputVerifyProps extends InputProps {
  /** 发送验证码接口函数 */
  sendCode: () => void;
  /** 倒计时时间 */
  countDown?: number;
  /** 初始验证码文本内容 */
  initCodeText?: string;
  /** 重新发送验证码文本内容 */
  reCodeText?: string;
  /** 验证码类名 */
  codeClassname?: string;
}

export const InputVerify: FC<InputVerifyProps> = (props) => {
  const { sendCode, countDown, initCodeText, reCodeText, codeClassname, ...restProps } = props;

  const [codeText, setCodeText] = useState(initCodeText);
  const [codeStatus, setCodeStatus] = useState(false);

  const handleCountDown = (timer: ReturnType<typeof setTimeout> | null, count: number) => {
    if (timer) {
      clearTimeout(timer);
    }

    if (count <= 0) {
      setCodeText(reCodeText);
      setCodeStatus(false);
    } else {
      setCodeText(`${count} s`);

      const newTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
        handleCountDown(newTimer, count - 1);
      }, 1000);
    }
  };

  const handleCodeClick = () => {
    if (codeStatus) return;

    sendCode && sendCode();
    setCodeStatus(true);
    handleCountDown(null, countDown as number);
  };

  const codeCls = classNames('ii-verify-button', codeClassname, {
    'ii-verify-button-disabled': codeStatus,
  });

  return (
    <Input
      data-testid="test-input-verify"
      {...restProps}
      suffix={
        <span className={codeCls} onClick={handleCodeClick}>
          {codeText}
        </span>
      }
    />
  );
};

InputVerify.defaultProps = {
  countDown: 60,
  initCodeText: '发送验证码',
  reCodeText: '重新发送',
};

export default InputVerify;
