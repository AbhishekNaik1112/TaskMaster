import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "@/components/ui/Logo";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

function NavBar() {
  return (
    <div className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <Logo />
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default NavBar;
