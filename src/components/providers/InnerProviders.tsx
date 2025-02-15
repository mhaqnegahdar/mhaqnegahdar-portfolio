// Hooks / Packages
import { Toaster } from "react-hot-toast";

// Components
import ModalProvider from "./ModalProvider";
import { ThemeToggle } from "../layout/header/ThemeToggle";

const InnerProviders = () => {
  return (
    <>
      <ThemeToggle />
      <ModalProvider />
      <Toaster position="top-center" />
    </>
  );
};

export default InnerProviders;
