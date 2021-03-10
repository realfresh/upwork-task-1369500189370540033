import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const ButtonQuick = Template.bind({});
ButtonQuick.args = {
  label: 'Button',
  runPerformanceTest: false,
  runPerformanceAsync: false,
  runPerformanceEffect: false,
};

export const ButtonSlow = Template.bind({});
ButtonSlow.args = {
  label: 'Button',
  runPerformanceTest: true,
  runPerformanceAsync: false,
  runPerformanceEffect: false,
};


export const ButtonSlowAsync = Template.bind({});
ButtonSlowAsync.args = {
  label: 'Button',
  runPerformanceTest: true,
  runPerformanceAsync: true,
  runPerformanceEffect: false,
};

export const ButtonSlowEffect = Template.bind({});
ButtonSlowEffect.args = {
  label: 'Button',
  runPerformanceTest: true,
  runPerformanceAsync: false,
  runPerformanceEffect: true,
};
