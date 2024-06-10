export default async function Server() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await res.json();
  console.log(post);
  return <div>{post && JSON.stringify(post)}</div>;
}
