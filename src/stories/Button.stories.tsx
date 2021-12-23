/*
 * @Author: ylyu
 * @Date: 2021-12-22 14:18:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-23 14:45:57
 * @Description: Button
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Atoms/Button',
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
export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  // label: 'Button',
};

export const Large: ComponentStory<typeof Button> = Template.bind({});
Large.args = {
  size: 'large',
  // label: 'Button',
};

export const Small: ComponentStory<typeof Button> = Template.bind({});
Small.args = {
  size: 'small',
  // label: 'Button',
};
