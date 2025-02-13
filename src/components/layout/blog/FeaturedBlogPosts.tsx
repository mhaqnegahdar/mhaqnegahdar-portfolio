import { featuredPostsData } from "@/lib/data";
import Link from "next/link";
import NextImage from "next/image";

export default function FeaturedBlogPosts() {
  return (
    <>
      <div className="grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredPostsData.map((val) => (
          <article
            key={val.date}
            className="group/item relative flex flex-col gap-2 overflow-hidden rounded-xl transition-all duration-150 hover:scale-105 lg:first:col-span-2 lg:last:col-span-2"
          >
            <Link href={val.link}>
              <NextImage
                src={val.imageUrl}
                alt={val.title}
                className="h-[300px] w-full object-cover"
                width={800}
                height={450}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white">{val.title}</h2>
                <p className="mt-2 h-0 text-sm text-white opacity-0 duration-500 group-hover/item:h-8 group-hover/item:opacity-100">
                  {val.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <NextImage
                    src={val.authorImage}
                    alt={val.author}
                    className="w-8 rounded-full object-cover"
                    width={200}
                    height={200}
                  />
                  <span className="text-xs text-white">{val.author}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="my-8 flex w-full justify-center">
        <Link
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
          href="/articles"
        >
          See All Posts
        </Link>
      </div>
    </>
  );
}
