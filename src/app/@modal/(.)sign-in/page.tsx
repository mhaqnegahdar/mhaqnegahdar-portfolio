"use client";
import { SignIn } from "@clerk/nextjs";

import Modal from "../components/Modal";

export default function ModalSignIn() {
  return (
    <Modal>
      <SignIn routing="virtual" signUpUrl="/sign-up" />
    </Modal>
  );
}
