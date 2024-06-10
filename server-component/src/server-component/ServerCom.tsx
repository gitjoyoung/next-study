import React from "react";

export default async function ServerCom() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>ServerCom</div>;
}
