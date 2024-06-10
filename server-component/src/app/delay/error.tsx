"use client";
import React from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);

  return (
    <div>
      <p>페이지 에러</p>
      <button onClick={reset}>리셋 버튼</button>
    </div>
  );
}
