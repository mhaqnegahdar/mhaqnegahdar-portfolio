import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";

// Providers
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/layout/header/ThemeToggle";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamad Haqnegahdar",
  description: "Full Stack Developer with your profite in mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 px-4 pt-28 text-gray-950 dark:bg-black dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="absolute left-0 right-0 top-[-10%] -z-10 h-[1000px] w-full max-w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#44444436,#fbfbfb36)] dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[size:14px_24px]"></div>

          <Header />
          {children}
          <Footer />
          <ThemeToggle />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
