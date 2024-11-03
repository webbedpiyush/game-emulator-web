import { getGamesByCategory } from "@/lib/gameQueries";

export default async function page({ params, searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { games, totalPages, currentPage } = await getGamesByCategory(
    params.slug,
    page
  );
  return (
    <div>
      <h1 className="font-sans text-3xl capitalize mb-4">{params.slug}</h1>
      <nav className="rounded-md w-full mb-4">
        <ol className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li className="text-gray-500 capitalize">{params.slug}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {games.length === 0 ? (
          <p>No results.</p>
        ) : (
          games.map((game) => (
            <a href={`/game/${game.slug}`} key={game.id} className="group">
              <div className="overflow-hidden rounded-lg border-accentSecondary border mb-2">
                <img
                  src={`/game/${game.image}.jpg`}
                  width={300}
                  height={300}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h1 className="font-medium">{game.title}</h1>
            </a>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="rounded-md shadow">
            {currentPage > 1 && (
              <a
                href={`/category/${params.slug}?page=${currentPage - 1}`}
                className="px-3 py-2 rounded-l border text-sm font-medium text-gray-500 "
              >
                Previous
              </a>
            )}
            {[...Array(totalPages).keys()].map((pageNum) => (
              <a
                href={`/category/${params.slug}?page=${pageNum + 1}`}
                key={pageNum + 1}
                className={`px-3 py-2 border text-sm font-medium ${
                  currentPage === pageNum + 1
                    ? "text-indigo-600"
                    : "text-gray-500"
                }`}
              >
                {pageNum + 1}
              </a>
            ))}
            {currentPage < totalPages && (
              <a
                href={`/category/${params.slug}?page=${currentPage + 1}`}
                className="px-3 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500"
              >
                Next
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
