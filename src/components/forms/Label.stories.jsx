import React from 'react';

import Label from './Label';

export default {
  title: 'Label',
  component: Label,
};

const Template = (args) => <Label {...args}>Example Label</Label>;

export const Primary = Template.bind({});
Primary.args = {
  name: 'name',
  label: 'Label',
};