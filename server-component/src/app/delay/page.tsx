import DelayCom from "@/server-component/DelayCom";
import ServerCom from "@/server-component/ServerCom";
import React from "react";

export default function page() {
  return (
    <>
      <ServerCom />
      <DelayCom />
    </>
  );
}
