"use client";
import React from "react";
import { ImSpinner } from "react-icons/im";
import { useInView } from "react-intersection-observer";

export default function LoderScroll() {
  const { ref, inView } = useInView();

  console.log(inView);
  return (
    <div ref={ref} className="flex justify-center items-center h-28">
      <ImSpinner className={`animate-spin text-4xl`} />
    </div>
  );
}
