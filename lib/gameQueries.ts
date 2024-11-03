import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllGames() {
  return await prisma.game.findMany({});
}

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

export async function getGamesByCategoryId(categoryId: number) {
  return await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    select: {
      title: true,
      slug: true,
      games: {
        where: {
          published: true,
        },
        take: 8,
      },
    },
  });
}

export async function getGamesBySelectedCategories(categoryIds: any[]) {
  return await prisma.category.findMany({
    where: {
      id: {
        in: categoryIds,
      },
      games: {
        some: {
          published: true,
        },
      },
    },
    select: {
      title: true,
      slug: true,
      games: {
        where: { published: true },
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          image: true,
          game_url: true,
          created_at: true,
        },
      },
    },
  });
}

export async function getGameBySlug(slug: string) {
  return await prisma.game.findUnique({
    where: {
      slug: slug,
    },
    include: {
      categories: true,
    },
  });
}

export async function getGamesByCategory(categorySlug: string, page = 1) {
  const ITEMS_PER_PAGE = 20;
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const [games, totalCount] = await Promise.all([
    prisma.game.findMany({
      where: {
        categories: {
          some: {
            slug: categorySlug,
          },
        },
      },
      skip,
      take: ITEMS_PER_PAGE,
    }),
    prisma.game.count({
      where: {
        categories: {
          some: {
            slug: categorySlug,
          },
        },
      },
    }),
  ]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  return { games, totalPages, currentPage: page };
}
