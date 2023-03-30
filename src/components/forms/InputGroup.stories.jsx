import React from 'react';

import InputGroup from './InputGroup';

import { Primary as LabelStory } from './Label.stories'
import { Default as DefaultInputStory, Success as SuccessInputStory, Error as ErrorInputStory } from './InputBase.stories'
import { Failure as ErrorStory } from './FieldError.stories'
import { Success as SuccessStory } from './FieldSuccess.stories'

export default {
  title: 'Input Group',
  component: InputGroup,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
};

const Template = args => <InputGroup {...args} />

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  children: <>
    <LabelStory {...LabelStory.args} />
    <DefaultInputStory {...DefaultInputStory.args} />
  </>
};

export const SuccessGroup = Template.bind({});
SuccessGroup.args = {
  children: <>
    <LabelStory {...LabelStory.args} />
    <SuccessInputStory {...SuccessInputStory.args} />
    <SuccessStory {...SuccessStory.args}  />
  </>
};

export const ErrorGroup = Template.bind({});
ErrorGroup.args = {
  children: <>
    <LabelStory {...LabelStory.args} />
    <SuccessInputStory {...SuccessInputStory.args} />
    <ErrorStory {...ErrorInputStory.args} />
  </>
};