"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEMES = [
  { id: "light", Icon: Sun },
  { id: "dark", Icon: Moon },
  { id: "system", Icon: Computer },
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn(className)} variant="outline" size="icon">
          {mounted && theme === "light" && <Sun className="h-5 w-5" />}
          {mounted && theme === "dark" && <Moon className="h-5 w-5" />}
          {mounted && theme === "system" && <Computer className="h-5 w-5" />}
          {!mounted && <div className="h-5 w-5" />}
          <span className="sr-only">Выберите тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-none mt-0.5 flex gap-2" align="end">
        {THEMES.map(({ id, Icon }) => (
          <DropdownMenuItem
            key={id}
            className={cn(
              "flex h-8 w-8.5 cursor-pointer justify-center",
              mounted && theme === id && "bg-primary/20 text-primary",
            )}
            onClick={() => setTheme(id)}
          >
            <Icon />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
