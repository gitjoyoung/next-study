"use client";
import React from "react";

export default function ErrorCom() {
  if (Math.random() > 0.5) throw new Error("This 에러페이지");
  return <div>글로벌 에러 페이지 </div>;
}
