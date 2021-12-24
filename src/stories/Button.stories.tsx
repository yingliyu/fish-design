/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-24 10:54:06
 * @Description: Button
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/General/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <Button {...args} />;

// export const Primary: any = <Button type="primary">Button</Button>
export const Primary: ComponentStory<typeof Button> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  // primary: true,
  label: 'Button',
};
// export const Sample = () => ({
//   template: '<Button :label=label />',
//   data: {
//     label: 'hello button',
//   },
// })
// Primary.storyName = 'I am the primary'
export const Danger: ComponentStory<typeof Button> = Template.bind({});
Danger.args = {
  label: 'Button',
  danger: true,
};

export const Large: ComponentStory<typeof Button> = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small: ComponentStory<typeof Button> = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
