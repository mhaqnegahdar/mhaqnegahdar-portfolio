// Components
import BlogHeader from "@/components/layout/header/BlogHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </>
  );
}
