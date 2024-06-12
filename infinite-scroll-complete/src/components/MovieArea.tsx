import MovieCard from "./MovieCard";

export type TMovie = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

export default function MovieArea({
  title,
  movies,
}: {
  title: string;
  movies: TMovie[];
}) {
  return (
    <>
      <article className="bg-black pt-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </section>
      </article>
    </>
  );
}
