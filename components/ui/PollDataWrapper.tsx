import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: Function;
}

export class Wrapper extends React.Component<WrapperProps> {
  render() {
    const { callback, children, ...rest } = this.props;
    return (
      <div className='border-white border rounded-md p-1' {...rest}>
        {children}
      </div>
    );
  }
}
