"use client";
// Hooks / Packages
import { ClerkProvider } from "@clerk/nextjs";
import { dark, experimental__simple } from "@clerk/themes";
import { useTheme } from "next-themes";

const OuterProviders = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : experimental__simple,
      }}
    >
      {children}
    </ClerkProvider>
  );
};
export default OuterProviders;
