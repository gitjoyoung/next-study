import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MovieArea from "@/components/MovieArea";
import Loader from "@/components/Loader";
import Post from "@/components/Post";

export const getMovies = async (type: string, page: number) => {
  const data = await (
    await fetch(
      "http://localhost:3000/api/movies?type=" + type + "&page=" + page
    )
  ).json();
  console.log("getMovies", type, data);
  return data;
};

// 끝점 파악하기
export default async function Home() {
  const { results: popular } = await getMovies("popular", 1);
  return (
    <>
      <Post />
      <Header />
      <Banner />
      <MovieArea title={"POPULAR"} movies={popular} />
      <Loader />
    </>
  );
}
