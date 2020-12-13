import React from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

export const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <>
      <Button data-testid="button" ref={ref} {...props}>
        {props.children}
      </Button>
    </>
  )
);
