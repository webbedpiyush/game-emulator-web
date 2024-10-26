export default function notFound() {
  return (
    <section className="flex items-center justify-center h-screen bg-[url('/page/not-found.jpg')] bg-cover">
      <div className="flex flex-col text-center">
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold">
          404
        </h1>
        <p className="mb-8 text-lg lg:text-lg">Page not Found.</p>
        <a
          href="/"
          className="bg-accent inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium focus:right-4"
        >
          Go to Homepage...
        </a>
      </div>
    </section>
  );
}
