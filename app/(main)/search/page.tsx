import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getData(q: string) {
  const games = await prisma.game.findMany({
    where: {
      title: {
        contains: q,
      },
    },
    take: 100,
  });

  return games;
}

export default async function page(req: { searchParams: { query: string } }) {
  const searchQuery = req.searchParams.query;
  const games = await getData(searchQuery);
  return (
    <div>
      <h1 className="">search page</h1>
      {/* <pre>{JSON.stringify(games, null, 4)}</pre> */}
    </div>
  );
}
