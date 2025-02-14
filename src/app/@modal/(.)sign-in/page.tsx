"use client";

// Components
import { SignIn } from "@clerk/nextjs";
import Modal from "@/app/@modal/components/Modal";

export default function ModalSignIn() {
  return (
    <Modal>
      <SignIn routing="virtual" signUpUrl="/sign-up" />
    </Modal>
  );
}
