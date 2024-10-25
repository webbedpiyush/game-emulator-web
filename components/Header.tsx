import Search from "./Search";

export default function Header() {
  return (
    <header className="flex h-14 px-4 items-center">
      <a href="/">Logo Here</a>
      <Search />
    </header>
  );
}
