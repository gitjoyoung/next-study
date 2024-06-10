import ClientCom from "@/client-component/ClientCom";
import ServerCom from "@/server-component/ServerCom";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientCom />
      </Suspense>
      <ServerCom />
    </>
  );
}
