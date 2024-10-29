import GameEmulator from "@/components/GameEmulator";
import { getGameBySlug } from "@/lib/gameQueries";

export async function generateMetadata({ params }: { params: Params }) {
  const game = await getGameBySlug(params.slug);

  const title = `${game?.title} | game-emulator` || "game-emulator";

  return { title };
}

interface Params {
  slug: string;
}
export default async function page({ params }: { params: Params }) {
  const game = await getGameBySlug(params.slug);

  return (
    <div>
      <nav className="rounded-md w-full mb-4">
        <ol className="flex list-reset">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <a href={game?.categories[0]?.title}>
              {game?.categories[0]?.title}
            </a>
          </li>
          <li>
            <span className="text-gray-500 mx-2"> / {game?.title}</span>
          </li>
        </ol>
      </nav>
      <GameEmulator game={game} />

      <h1 className="text-xl mt-2">{game?.title}</h1>
      <p className="text-accent mt-2">{game?.description}</p>
    </div>
  );
}
