"use client";

import { cn } from "@/lib/utils";
import React from "react";

const DarkButton = ({ icon, label, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-black text-white rounded-2xl flex flex-row items-center h-[36px] min-w-[80px] p-4 gap-2 cursor-pointer hover:bg-neutral-700 border border-neutral-700",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
