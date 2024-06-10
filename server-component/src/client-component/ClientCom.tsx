"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect } from "react";

export default function ClientCom() {
  const params = useParams();
  const [state, setState] = React.useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setState(true);
    }, 5000);
    return () => clearTimeout(delay);
  }, []);

  if (state) return <div>ClientCom</div>;
  return null;
}
