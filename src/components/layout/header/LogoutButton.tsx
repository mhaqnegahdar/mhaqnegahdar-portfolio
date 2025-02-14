"use client";

// Hook
import { useClerk } from "@clerk/nextjs";

// Components
import { Button } from "@/components/ui/Button";

export default function LogoutButton() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({
      redirectUrl: "/blog",
    });
  };

  return (
    <Button
      className={"h-12 w-full justify-start rounded-none border-none"}
      onClick={handleSignOut}
      variant={"outline"}
    >
      Log Out
    </Button>
  );
}
