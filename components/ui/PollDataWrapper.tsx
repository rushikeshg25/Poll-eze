import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: Function;
}

export class Wrapper extends React.Component<WrapperProps> {
  render() {
    const { callback, children, ...rest } = this.props;
    return <div {...rest}>{children}</div>;
  }
}
