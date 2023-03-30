import React from 'react';

import FieldSuccess from './FieldSuccess';

export default {
  title: 'Success Message',
  component: FieldSuccess,
};

const Template = () => <FieldSuccess>The Action has been successful</FieldSuccess>;

export const Success = Template.bind({});
Success.args = { label: 'Success Message' };