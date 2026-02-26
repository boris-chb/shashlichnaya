"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMenu } from "@/components/menu-context";

export function MenuSearch() {
  const { setQuery } = useMenu();
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={searchRef}
      className={cn(
        "relative shrink-0 transition-all duration-200 ease-in-out",
        searchOpen ? "w-60" : "w-8 cursor-pointer",
      )}
      onClick={() => setSearchOpen(true)}
    >
      <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 p-0" />
      {searchOpen && (
        <Input
          autoFocus
          placeholder="Поиск блюд"
          onChange={(e) => setQuery(e.target.value)}
          className="bg-card border-border w-full pr-0 pl-8"
        />
      )}
    </div>
  );
}
