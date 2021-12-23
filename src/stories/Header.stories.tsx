/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 10:31:49
 * @Description:
 */
import { Header } from '../components/Header';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
