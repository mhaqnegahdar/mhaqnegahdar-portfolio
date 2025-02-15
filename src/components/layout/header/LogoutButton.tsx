"use client";

// Hook
import { useClerk } from "@clerk/nextjs";

// Components
import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({
      redirectUrl: "/blog",
    });
  };

  return (
    <Button
      aria-label="Sign out"
      title="Sign out"
      className={"w-full rounded-none flex justify-start"}
      onClick={handleSignOut}
      variant={"ghost"}
    >
      <LogOut size={25} />
    </Button>
  );
}
