import React from "react";

const movieList = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRhNTczZDk3NTc2ZDUxNGM3NTYyZjNjMjI3NzgxYiIsInN1YiI6IjY1N2MxMjQwZTkzZTk1MjE4ZjZkMjM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkyRzjy-li0pLAqbjEVApq9hBDG6TlLdtJ56YuttHeU",
    },
  };
  const res = await fetch(url, options);
  const data = res.json();
  return data;
};

export default async function Movie() {
  const { results } = await movieList();
  console.log(results);
  return <div>{results && JSON.stringify(results)}</div>;
}
