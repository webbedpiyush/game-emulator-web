"use client";
import { HomeIcon, CubeIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React from "react";

interface MainMenuItem {
  name: string;
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface CategoryMenuItem {
  id: number;
  slug: string;
  title: string;
  games?: { length: number };
}

export default function SidebarNav({
  categoryMenu,
}: {
  categoryMenu: CategoryMenuItem[];
}) {
  const activeSegment = usePathname();

  const mainMenuItems: MainMenuItem[] = [
    {
      name: "Home",
      icon: HomeIcon,
      slug: "/",
    },
    {
      name: "New",
      icon: CubeIcon,
      slug: "/new-games",
    },
  ];

  return (
    <>
      <div className="text-accent text-xs mb-2">MENU</div>
      <ul className="flex flex-col gap-2 mb-6">
        {mainMenuItems.map((item) => (
          <li key={item.slug}>
            <a
              className={`flex items-center text-sm tracking-wide px-2 p-1 gap-2 rounded-md 
              ${
                activeSegment === `${item.slug}`
                  ? "active bg-primary"
                  : "inactive hover:bg-primary"
              }`}
              href={item.slug}
            >
              <item.icon className="w-6 h-6" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-accent text-xs mb-2">CATEGORIES</div>
      <ul>
        {categoryMenu.map((item) => (
          <li key={item.id}>
            <a
              href={`/category/${item.slug}`}
              className={`flex items-center text-sm gap-2 px-2 p-1 tracking-wide rounded-md ${
                activeSegment === `/category/${item.slug}`
                  ? "bg-primary"
                  : "hover:bg-primary"
              }`}
            >
              <img src="/icons/arcade.jpg" className="h-6 w-8" />
              {item.title}{" "}
              <span className="text-accent">{`(${item?.games?.length})`}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
