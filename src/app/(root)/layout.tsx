// Components
import PortfolioHeader from "@/components/layout/header/PortfolioHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PortfolioHeader />
      {children}
    </>
  );
}
