"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  const handleChange = (value: string) => {
    setSearchQuery(value);
  };
  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto">
      <MagnifyingGlassIcon className="absolute left-2.5 top-2 h-4 w-4" />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search for games... Ex. unfair mario"
        className="bg-main rounded-lg w-full border border-accent pl-8 pr-4 h-8"
      />
    </form>
  );
}
