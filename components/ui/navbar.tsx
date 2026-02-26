"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, Check, ChevronDown } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const MENU_LINKS = [
  { href: "/menu/shashlyk/", label: "Шашлычное", type: "shashlyk" },
  { href: "/menu/pelmen/", label: "Пельменное", type: "pelmen" },
];

const MAIN_LINKS = [{ href: "/about", label: "О нас" }];

export function Navbar({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  const { menuType } = useParams();

  return (
    <header
      className={cn(
        `bg-background/95 supports-backdrop-filter:bg-background/75 border-primary/10 sticky top-0 z-50 flex items-center justify-between gap-2 border-b px-4 py-4 backdrop-blur`,
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/bufet-logo.jpg"
          alt="logo"
          width={48}
          height={48}
          className="rounded-full md:h-14 md:w-14"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-balance md:text-xl">
            {`Горбуфет ${menuType === "pelmen" ? "Пельменная" : "Шашлычная"}`}
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm">
            {`Домашние блюда, приготовленные с душой`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-none w-34" align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7">
              Выберите меню
            </DropdownMenuLabel>

            {MENU_LINKS.map(({ href, label, type }) => {
              const isActive = pathname.includes(type);
              return (
                <DropdownMenuItem
                  key={href}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between",
                    isActive && "bg-primary/10 text-primary font-medium",
                  )}
                  asChild
                >
                  <Link href={href}>
                    {label}
                    {isActive && <Check className="h-4 w-4" />}
                  </Link>
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator />

            {MAIN_LINKS.map(({ href, label }) => (
              <DropdownMenuItem key={href} asChild>
                <Link href={href}>{label}</Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <div className="flex justify-center">
              <ThemeToggle className="w-full" />
            </div>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {MAIN_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "hover:text-primary text-sm font-medium transition-colors",
            pathname === href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors outline-none">
          Меню <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40 space-y-1">
          {MENU_LINKS.map(({ href, label, type }) => {
            const isActive = pathname.includes(type);
            return (
              <DropdownMenuItem
                key={href}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between",
                  isActive && "bg-primary/10 text-primary font-medium",
                )}
                asChild
              >
                <Link href={href}>
                  {label}
                  {isActive && <Check className="h-4 w-4" />}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <ThemeToggle />
    </nav>
  );
}
