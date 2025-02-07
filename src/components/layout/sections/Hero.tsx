"use client";

// Hooks / Packages
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import { ArrowRight, DownloadIcon, Github, Linkedin } from "lucide-react";

// store
import { useSectionsStore } from "@/store/sections-store";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useSectionsStore();

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-3/4 mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/profile.webp"
              alt="Mohamad Haqnegahdar"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-3xl border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m <span className="font-bold">Mohamad</span> a{" "}
        <span className="fon-bold"> full-stack </span>
        javascript developer with your <span className="underline">
          Profit
        </span>{" "}
        in mind! <br></br> I specialize in{" "}
        <span className="font-bold underline">Nodejs</span> &{" "}
        <span className="underline">Nextjs</span> and always strive for clean
        coding practices
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <ArrowRight
            size={15}
            className="opacity-70 transition group-hover:translate-x-1"
          />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/pdf/Mohamad_Haqnegahdar_FullStackDeveloper_Resume.pdf"
          download
        >
          Download CV{" "}
          <DownloadIcon
            size={15}
            className="opacity-60 transition group-hover:translate-y-1"
          />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/mhaqnegahdar"
          target="_blank"
          title="Linkedin"
          aria-label="Linkedin social media link"
        >
          <Linkedin />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/mhaqnegahdar"
          target="_blank"
          title="Github"
          aria-label="Github link"
        >
          <Github />
        </a>
      </motion.div>
    </section>
  );
}
