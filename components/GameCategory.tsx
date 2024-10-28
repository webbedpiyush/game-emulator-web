import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function GameCategory({ category }) {
  return (
    <section className="mb-4">
      <div className="flex justify-between gap-4">
        <h2 className="font-bold mb-4">{category.title}</h2>
        <a
          href={`/category/${category.slug}`}
          className="font-medium text-sm text-accent hover:underline underline-offset-4"
        >
          View All <ChevronRightIcon className="h-4 w-4 inline-block" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.games.map((game) => (
          <a href={`/game/${game.slug}`} key={game.slug} className="group">
            <div className="overflow-hidden rounded-lg border border-accentSecondary mb-2">
              <Image
                src={`/game/${game.slug}.jpg`}
                width={300}
                height={300}
                alt={game.title}
                quality={80}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-accent">{category.title}</p>
            <h1 className="font-medium">{game.title}</h1>
          </a>
        ))}
      </div>
    </section>
  );
}
