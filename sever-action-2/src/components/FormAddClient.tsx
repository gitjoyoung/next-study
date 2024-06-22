"use client";

import { invalidData } from "@/libs/action";
import { useState } from "react";

export default function FormAddClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      console.log("ok!");
      invalidData();
    }
  };

  return (
    <>
      <form action="" className="w-[300px]" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter User Email"
          className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full">
          Save
        </button>
      </form>
    </>
  );
}
