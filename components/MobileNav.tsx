"use client";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CubeIcon,
  PlusIcon,
  DocumentChartBarIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavItems = [
    {
      name: "Home",
      path: "/",
      icon: HomeIcon,
      slug: null,
    },
    {
      name: "New",
      path: "/new-games",
      icon: PlusIcon,
      slug: "new-games",
    },

    {
      name: "Categories",
      path: "/category",
      icon: DocumentChartBarIcon,
      slug: "category",
    },
    {
      name: "About",
      path: "/about",
      icon: CommandLineIcon,
      slug: "about",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: DevicePhoneMobileIcon,
      slug: "contact",
    },
  ];

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <Bars3Icon className="w-6 h-6" aria-label="open menu" />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden"
          aria-expanded="true"
          aria-controls="mobile-menu"
        >
          <XMarkIcon className="w-6 h-6" aria-label="close menu" />
        </button>
      )}
      {isOpen && (
        <div className="fixed top-[57px] h-dvh left-0 right-0 z-50 bg-main p-4">
          <ul className="bg-muted flex flex-col mb-6">
            {mobileNavItems.map((item) => (
              <li key={item.name} className="border-accent">
                <a
                  href={item.path}
                  className="text-xl font-medium hover:bg-accent rounded-md flex gap-4 items-center border-b border-accent py-4 px-6"
                >
                  <item.icon className="h-6 2-6" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}



