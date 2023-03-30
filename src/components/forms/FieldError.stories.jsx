import React from 'react';

import FieldError from './FieldError';

export default {
  title: 'Failure Message',
  component: FieldError,
};

const Template = () => <FieldError>The Action has been unsuccessful</FieldError>;

export const Failure = Template.bind({});
Failure.args = { label: 'Failure Message' };