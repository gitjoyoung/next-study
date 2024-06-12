export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") || "now_playing";
  const lang = searchParams.get("lang") || "en-US";
  const page = searchParams.get("page") || 1;

  const url = `${process.env.TMDB_URL}/${type}?language=${lang}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_TOKEN,
    },
  };

  const data = await (await fetch(url, options)).json();
  return Response.json(data);
}
