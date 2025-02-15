
// Components
import { Button } from "@/components/ui/Button";

// Icons
import { X } from "lucide-react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLElement &&
      !event.target.closest(".modal-content")
    ) {
      history.back();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <Button
        className="absolute left-4 top-4 rounded-full"
        variant={"outline"}
        size={"icon"}
      >
        <X size={30} />
      </Button>
      <div className="modal-content">{children}</div>
    </div>
  );
}
