"use client";

import { createContext, useContext } from "react";
import type { Menu } from "@/components/menu-section";

export type Category = {
  id: string;
  label: string;
};

interface MenuContextType {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  query: string;
  setQuery: (query: string) => void;
  categories: Category[];
  filteredMenu: Menu;
}

export const MenuContext = createContext<MenuContextType | null>(null);

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within MenuProvider");
  }
  return context;
}
