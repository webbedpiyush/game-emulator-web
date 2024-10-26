import { getData } from "@/lib/gameQueries";
import Image from "next/image";

let games: any[] = [];

export default async function page(req: { searchParams: { query: string } }) {
  const searchQuery = req.searchParams.query;
  if (searchQuery) {
    games = await getData(searchQuery);
  }
  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl mb-4">
        {searchQuery
          ? `results found for ${searchQuery}`
          : "No search query provided."}
      </h1>
      <div className="text-accent mb-4">{`${games.length} results`}</div>
      <ul>
        {games.length > 0 &&
          games.map((game) => (
            <li key={game.id} className="mb-2">
              <a
                href={`/game/${game.slug}`}
                className="flex bg-main hover:bg-accentSecondary p-4 rounded-lg gap-4"
              >
                <Image
                  src={`/game/${game.image}.jpg`}
                  alt={game.title}
                  width={300}
                  height={300}
                  className="w-2/6 lg:w-1/6 rounded-md"
                  quality={50}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl">
                    {game.title} {game.image}
                  </h2>
                  <p className="">{game.description}</p>
                </div>
              </a>
            </li>
          ))}
      </ul>
      {/* <pre>{JSON.stringify(games, null, 4)}</pre> */}
    </div>
  );
}
