"use client";

//Hooks / Packages
import { useAlertModalStore } from "@/store/alertModalStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

// Component
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const AlertModal = () => {
  // states
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  // Store

  const {
    isOpen,
    action,
    title,
    description,
    api,
    successMessage,
    failMessage,
    afterRoute,

    // Action
    onClose,
  } = useAlertModalStore();

  // Actions

  // Delete Store
  const deleteReq = async () => {
    setIsSubmitting(true);
    await axios
      .delete(api)
      .then((response) => {
        // OnSuccess

        if (response.status == 200) {
          toast.success(successMessage);
          onClose();
          router.refresh();
          router.push(afterRoute);
        }
      })
      .catch(() => {
        //On Error
        toast.error(failMessage);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose()}
      title={title}
      description={description}
      
    >
      {/* Buttons */}
      <div className="flex w-full items-center justify-end gap-2 pt-6">
        <Button
          type="reset"
          variant={"outline"}
          className="mt-4"
          disabled={isSubmitting}
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          variant={"destructive"}
          type="submit"
          className="mt-4"
          disabled={isSubmitting}
          onClick={() => (action === "delete" ? deleteReq() : {})}
        >
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
