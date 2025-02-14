import AuthHeader from "@/components/layout/header/AuthHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-col items-center justify-center pb-20">
        {children}
      </main>
    </>
  );
}
