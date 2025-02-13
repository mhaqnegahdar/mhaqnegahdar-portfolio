import { create } from "zustand";

export interface AlertModalStoreState {
  isOpen: boolean;
  title: string;
  description: string;
  action: string;

  api: string;
  successMessage: string;
  failMessage: string;
  afterRoute: string;
}
interface AlertModalStoreAction {
  onOpen: (modalProps: Omit<AlertModalStoreState, "isOpen">) => void;
  onClose: () => void;
}
export const useAlertModalStore = create<
  AlertModalStoreState & AlertModalStoreAction
>((set) => ({
  isOpen: false,
  action: "",
  title: "",
  description: "",
  api: "",
  successMessage: "Action completed Successfully",
  failMessage: "Something went wrong!",
  afterRoute: "/",
  onOpen: (modalProps) =>
    set({
      isOpen: true,
      title: modalProps.title,
      description: modalProps.description,
      action: modalProps.action,
      api: modalProps.api,
      successMessage: modalProps.successMessage,
      failMessage: modalProps.failMessage,
      afterRoute: modalProps.afterRoute,
    }),
  onClose: () =>
    set({
      isOpen: false,
      action: "",
      title: "",
      description: "",
      api: "",
      successMessage: "Action completed Successfully",
      failMessage: "Something went wrong!",
      afterRoute: "/",
    }),
}));
