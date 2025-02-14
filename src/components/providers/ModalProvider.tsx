"use client";

// Hooks/ Packages
import { useState, useEffect } from "react";

// Components
// import LoginModal from "@/components/modals/LoginModal";
import AlertModal from "@/components/modals/AlertModal";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AlertModal />
    </>
  );
};

export default ModalProvider;
