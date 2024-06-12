"use client";
import { getMovies } from "@/app/page";
import { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { TMovie } from "./MovieArea";
import MovieCard from "./MovieCard";

export default function Loader() {
  const idRef = useRef(2);
  const { ref, inView } = useInView();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<TMovie[]>([]);
  useEffect(() => {
    if (inView && !loading) {
      setLoading(true);
      // 끝점에 도달하면 API 호출..
      getMovies("popular", idRef.current++).then((res) => {
        setMovies((prev) => [...prev, ...res.results]);
        setLoading(false);

      });

    }
  }, [inView, movies]);

  return (
    <>
      <div className="bg-black">
        <article className="bg-black px-4 xs:px-0">
          <section className="container mx-auto  text-white">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
              {movies &&
                movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
            </div>
          </section>
        </article>
        <div ref={ref} className="flex justify-center">
          <FaReact className="text-5xl animate-spin text-white" />
        </div>
      </div>
    </>
  );
}
