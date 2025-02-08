"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "@/components/ui/Image";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  codeLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[23rem] sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mb-4 mt-2 leading-relaxed text-gray-700 dark:text-white/90">
            {description}
          </p>
          <ul className="mb-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 sm:mt-auto">
            {demoLink && (
              <Link href={demoLink}>
                <button className="rounded-lg bg-black/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20">
                  Demo
                </button>
              </Link>
            )}
            {codeLink && (
              <Link href={codeLink}>
                <button className="rounded-lg bg-black/50 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20">
                  Code
                </button>
              </Link>
            )}
          </div>
        </div>

        <Image
          path={imageUrl}
          alt="Project I worked on"
          w={800}
          h={450}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] sm:block"
        />
      </section>
    </motion.div>
  );
}
