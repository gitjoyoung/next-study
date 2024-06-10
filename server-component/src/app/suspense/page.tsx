import DelayCom from "@/server-component/DelayCom";
import ServerCom from "@/server-component/ServerCom";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerCom />
        <DelayCom />
      </Suspense>
    </>
  );
}
