import React from "react";
import { Riple, type RipleProps } from "react-loading-indicators";

const LoadingIndicator: React.FunctionComponent<RipleProps> = ({ size }) => {
  return <Riple color="#000000" size={size} text="" textColor="" />;
};

export default LoadingIndicator;
