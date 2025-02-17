"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useTheme } from "next-themes";
import { EditorInputProps } from "@/lib/forms";
import { cn } from "@/lib/utils";

// Our <Editor> component we can reuse later
export default function EditorInput({
  field,
  form,
  editable = true,
  className,
}: EditorInputProps) {
  const { setFieldValue } = form;

  // Creates a new editor instance.
  const editor = useCreateBlockNote({ initialContent: field.value });

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
        }
      `}
      </style>
      <BlockNoteView
        className={cn(
          "mt-2 rounded-md border bg-background py-4 shadow",
          className,
        )}
        editor={editor}
        theme={editorTheme}
        editable={editable}
        onChange={() => {
          setFieldValue(field.name, editor.document);
        }}
      />
    </>
  );
}
