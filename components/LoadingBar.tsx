"use client";

import * as React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color={"red"} cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
