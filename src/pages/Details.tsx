import React, { useEffect, useState } from "react";
import FailureMessage from "../components/FailureMessage";

const Details: React.FunctionComponent = () => {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    setIsLoggedOn(false);
  });

  return (
    <div className="pt-18 min-h-screen">
      {!isLoggedOn && <FailureMessage msg="User not logged on" />}
    </div>
  );
};

export default Details;
