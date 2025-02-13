import { SearchIcon } from "lucide-react";
import React from "react";

/**
 * SearchBar component
 *
 * This component renders a search bar for the blog, favorites, bookmarks pages with a tag system.
 *
 * @returns A JSX element representing the search bar.
 */
export default function SearchBar() {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col gap-8 md:flex-row">
      <nav className="w-full border-b-2 md:w-3/4">
        <ul className="flex gap-8 overflow-x-scroll px-4 md:overflow-visible">
          {["All", "React", "Nextjs", "Nodejs", "Go", "Database"].map(
            (category) => (
              <li
                key={category}
                className="group relative cursor-pointer pb-2 text-sm font-semibold capitalize text-primary duration-150 hover:text-blue-400"
              >
                <span className="absolute bottom-0 w-0 border-b-2 border-blue-400 group-hover:w-full md:-bottom-3"></span>
                {category}
              </li>
            ),
          )}
        </ul>
      </nav>
      {/*  ! Later put in a different component  */}
      <div className="flex w-full items-center gap-1 rounded-full px-4 py-2 text-left text-sm/6 text-gray-950/50 outline outline-2 -outline-offset-1 outline-border dark:bg-white/5 dark:text-white/50 dark:outline-white/15 md:w-1/4">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Blog..."
          className="w-full bg-transparent focus:outline-none"
        />

        <SearchIcon className="size-4 stroke-gray-600 dark:stroke-gray-400" />
      </div>
    </div>
  );
}
