"use client";

import * as React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-4">
      <GridLoader color="red" />
      <div className="text-[50px]">Opps!</div>
      <div>잠시 후에 다시 확인해주세요...</div>
    </div>
  );
};

export default ErrorMessage;
