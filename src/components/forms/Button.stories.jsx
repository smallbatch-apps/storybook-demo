import React from 'react'

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    },
  },
};

const Template = args => <Button {...args} />

export const Simple = Template.bind({})
Simple.args = {
  children: 'Press Me',
  size: 'md',
  color: 'primary',
  variant: 'filled',
  block: false,
  disabled: false,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  ...Simple.args,
  children: <>
    <span>💾</span>
    <span>Press Me</span>
  </>,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  ...Simple.args,
  children: <>
    <span>Press Me</span>
    <span>🔽</span>
  </>,
}

export const BothIcons = Template.bind({})
BothIcons.args = {
  ...Simple.args,
  children: <>
    <span>💾</span>
    <span>Press Me</span>
    <span>🔽</span>
  </>,
}