"use client";
// Hooks / Packages
import { useFormikContext } from "formik";
import React from "react";

// Components
import { Button } from "@/components/ui/Button";

function SubmitButton({ title = "Submit" }: { title?: string }) {
  const { isSubmitting, dirty } = useFormikContext();

  return (
    <Button type="submit" disabled={!dirty || isSubmitting}>
      {title}
    </Button>
  );
}

export default SubmitButton;
