"use client";

import React from "react";
import SectionHeading from "@/components/layout/sections/SectionHeading";

import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import FeaturedBlogPosts from "../blog/FeaturedBlogPosts";
import { motion } from "framer-motion";

export default function FeaturedBlog() {
  const { ref } = useSectionInView("Blog");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    }),
  };
  return (
    <section id="blog" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Latest Blog Posts</SectionHeading>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <FeaturedBlogPosts />
      </motion.div>
    </section>
  );
}
