import React, { FC } from 'react';
import { CustomButton as Button } from '../components/CustomButton';
import { ButtonProps } from 'antd/lib/button';

export default {
  title: 'Custom Button',
  component: Button,
};

export const AddTask: FC<ButtonProps> = (props) => (
  <Button {...props}>To Do</Button>
);
