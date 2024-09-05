import { sleep } from "@/lib/utils";
import * as React from "react";

const page = async () => {
  await sleep(2000);

  throw new Error("Error thrown from homepage");
  return <div>HOMEPAGE</div>;
};

export default page;
