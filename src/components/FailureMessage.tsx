import React from "react";

export type TFailureMessage = {
  msg: string;
};

const FailureMessage: React.FunctionComponent<TFailureMessage> = ({ msg }) => {
  return <p className="font-mono text-red-500">{msg}</p>;
};

export default FailureMessage;
