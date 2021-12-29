/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 10:15:02
 * @Description:
 */
import CheckCodeInput from '../components/CheckCodeInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/CheckCodeInput',
  component: CheckCodeInput,
} as ComponentMeta<typeof CheckCodeInput>;

const Template = (args: any) => <CheckCodeInput {...args} />;

export const Input: ComponentStory<typeof CheckCodeInput> = Template.bind({});
Input.args = {
  initCodeText: '发送验证码',
};
