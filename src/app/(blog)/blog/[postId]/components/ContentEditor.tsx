"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

export interface ContentEditorProps {
  initialContent: Array<object>;
}
export default function ContentEditor({ initialContent }: ContentEditorProps) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: initialContent,
  });

  //   Theme
  const { theme } = useTheme();
  const editorTheme = theme == "dark" ? "dark" : "light";
  // Renders the editor instance using a React component.
  return (
    <>
      <style>
        {`
        .bn-editor {
          background-color: var(--background);
          padding:0;
        }
      `}
      </style>
      <BlockNoteView
        className="px-0 py-8"
        editable={false}
        editor={editor}
        theme={editorTheme}
      />
    </>
  );
}
