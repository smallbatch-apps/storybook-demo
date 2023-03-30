import React from 'react';

import InputBase from './InputBase';

export default {
  title: 'Text Input',
  component: InputBase,
  argTypes: {
    success: {
      table: {
        disable: true
      }
    },
    error: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
  },
};

const Template = args => <InputBase {...args} />

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter a value',
  success: false,
  error: false,
  type: 'text',
  value: null,
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args.task,
  success: true,
  value: 'Valid text',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args.task,
  error: true,
  value: 'Invalid text'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args.task,
  disabled: true
};