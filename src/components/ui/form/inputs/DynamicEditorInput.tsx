"use client";

// Hooks / Packages
import dynamic from "next/dynamic";

//Types
import { EditorInputProps } from "@/lib/forms";

export const EditorInput = dynamic<EditorInputProps>(
  () => import("./EditorInput"),
  {
    ssr: false,
  },
);
