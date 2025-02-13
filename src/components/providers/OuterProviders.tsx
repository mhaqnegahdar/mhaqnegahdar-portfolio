// Hooks / Packages
import { ClerkProvider } from "@clerk/nextjs";

const OuterProviders = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
export default OuterProviders;
