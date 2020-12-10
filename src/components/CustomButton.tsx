import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <Button
      data-testid="button"
      ref={ref}
      // className={
      //   'bg-white text-pink border-pink hover:bg-pink hover:border-pink hover:text-white disabled:bg-black'
      // }
      {...props}
    >
      {props.children}
    </Button>
  )
);
