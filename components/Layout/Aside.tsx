"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu } from "@/types/menu";
import { CarFront, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { menuData } from "./root";

export default function Aside() {
  const pathUrl = usePathname();
  const asidemenus: Menu[] = menuData;
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <CarFront className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          {asidemenus.map((menu) => (
            <Tooltip key={menu.id}>
              <TooltipTrigger asChild>
                <Link
                  href={menu.path}
                  className={
                    pathUrl === menu.path
                      ? "text-accent-foreground bg-accent rounded-lg transition-colors"
                      : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  }
                  style={{ padding: "7px" }}
                >
                  {React.isValidElement(menu.icon) ? (
                    React.cloneElement(menu.icon)
                  ) : (
                    <span className="h-5 w-5 p-3">{menu.icon}</span>
                  )}
                  <span className="sr-only">{menu.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{menu.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
