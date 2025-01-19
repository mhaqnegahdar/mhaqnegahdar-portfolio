"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex items-center justify-center flex-col gap-5 text-lg text-gray-800 sm:flex-row sm:flex-wrap sm:gap-2">
        {skillsData.map((skillGroup, index) => (
          <React.Fragment key={skillGroup.name}>
            <div className="mt-12 w-full text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300">
              {skillGroup.name}
            </div>
            <ul className="mt-2 flex justify-center flex-wrap  gap-2">
              {skillGroup.skills.map((skill, skillIndex) => (
                <motion.li
                  className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={skillIndex}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index * skillGroup.skills.length + skillIndex}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
