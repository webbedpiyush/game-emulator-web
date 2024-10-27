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

export async function getCategoryMenu() {
  return prisma.category.findMany({
    include: {
      games: true,
    },
  });
}

export async function getGameCategories() {
  return prisma.category.findMany({});
}
