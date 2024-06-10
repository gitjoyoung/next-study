import React from "react";

export default async function DelayCom() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>DelayCom</div>;
}
