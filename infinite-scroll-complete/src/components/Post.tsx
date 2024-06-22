"use client";
import React from "react";

export default function Post() {
  const addPost = async () => {
    return await fetch("http://localhost:3000/api", {
      method: "POST",
      body: JSON.stringify({ name: "test" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return <button className="p-3 bg-violet-800" onClick={addPost}>Add Post</button>;
}
