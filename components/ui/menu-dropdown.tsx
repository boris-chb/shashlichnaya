"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuDropdown() {
  const pathname = usePathname();
  const currentMenuType = pathname.split("/").filter(Boolean).pop();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="px-0">
          Меню
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        <DropdownMenuItem asChild>
          <Link
            className={cn(
              "hover:bg-amber-200/75 rounded-sm border border-transparent",
              currentMenuType === "shashlyk" &&
                "bg-amber-400/75  text-amber-950 border border-amber-950/40 "
            )}
            href={"/menu/shashlyk"}
          >
            Шашлычное
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={"/menu/pelmen"}
            className={cn(
              "hover:bg-amber-200/75 rounded-sm border border-transparent",
              currentMenuType === "pelmen" &&
                "bg-amber-400/75 border border-amber-950/40 text-amber-950  rounded-sm"
            )}
          >
            Пельменное
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
