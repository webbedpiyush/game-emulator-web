import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex h-14 px-4 items-center">
      <a href="/">Logo Here</a>
      <Search />
      <nav className="flex gap-4 md:gap-6 ">
        <a href="#">
          <Cog6ToothIcon className="w-6 h-6" />
        </a>
        <MobileNav />
      </nav>
    </header>
  );
}
