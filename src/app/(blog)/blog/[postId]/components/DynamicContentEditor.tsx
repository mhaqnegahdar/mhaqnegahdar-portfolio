"use client";

// Hooks / Packages
import dynamic from "next/dynamic";

//Types
import { ContentEditorProps } from "./ContentEditor";

export const ContentEditor = dynamic<ContentEditorProps>(
  () => import("./ContentEditor"),
  {
    ssr: false,
  },
);
