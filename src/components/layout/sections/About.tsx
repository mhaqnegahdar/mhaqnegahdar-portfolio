"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My objective is to help facilitate the development process and increase
        users’ satisfaction regarding your system. I specialize in{" "}
        <span className="font-medium">Node.js & Next.js</span> framework and
        always strive for clean coding practices. My services include:
      </p>

      <ul className="list-disc list-inside mb-3">
        <li>
          Building efficient and responsive web applications tailored to user
          needs.
        </li>
        <li>Designing robust systems.</li>
        <li>
          Implementing new strategies to boost the quality and speed of your
          services, leading to increased customer satisfaction.
        </li>
      </ul>

      <p>
        Check out my work on <a href="https://github.com/mhaqnegahdar" target="_blank" className="underline">GitHub</a> look at the
      {" "}  <a href="#projects" className="underline">My Projects</a>! Let&apos;s chat
        about how we can make your products stand out from the rest!
      </p>

      <p className="italic">Best regards,</p>
      <p className="font-medium">Mohamad Haqnegahdar</p>
    </motion.section>
  );
}
