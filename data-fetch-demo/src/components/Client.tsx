"use client";
import React from "react";

type data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Client() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [data, setData] = React.useState<data[]>();
  const getPost = async () => {
    setIsLoaded(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await res.json();
    console.log(response);
    setData(response);
    setIsLoaded(false);
  };
  React.useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {isLoaded && <div>Loading...</div>}
      <p>
        {data &&
          data.map((item: data) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </p>
    </div>
  );
}
