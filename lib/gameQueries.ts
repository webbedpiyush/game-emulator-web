import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getData(params: string) {
  return await prisma.game.findMany({
    where: {
      title: {
        contains: params,
      },
    },
    take: 100,
  });
}
