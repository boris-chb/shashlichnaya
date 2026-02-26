"use client";

import { DrinksTabs } from "@/components/drinks-tabs";
import { MenuHeader } from "@/components/menu-header";
import { Menu, MenuSection } from "@/components/menu-section";
import { useEffect, useRef, useState } from "react";
import { MenuContext } from "@/components/menu-context";

const CATEGORY_LABELS: Record<string, string> = {
  main: "Прейскурант блюд",
  lunch: "Прейскурант на обед",
  night: "Ночное блюдо",
  drink: "Прейскурант напитков",
};

function useRestaurantMenu(menu: Menu) {
  const [activeCategory, setActiveCategory] = useState("");
  const [query, setQuery] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const categories = Object.keys(menu).map((id) => ({
    id,
    label: CATEGORY_LABELS[id] || id,
  }));

  const filteredMenu: Menu = query.trim()
    ? Object.fromEntries(
        Object.entries(menu)
          .map(([key, items]) => [
            key,
            items.filter(
              (i) =>
                i.name?.toLowerCase().includes(query.toLowerCase()) ||
                i.description?.toLowerCase().includes(query.toLowerCase()),
            ),
          ])
          .filter(([, items]) => items.length > 0),
      )
    : menu;

  useEffect(() => {
    const el = sectionRefs.current[activeCategory];
    if (el) {
      el.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    query,
    setQuery,
    sectionRefs,
    categories,
    filteredMenu,
  };
}

export default function RestaurantMenu({ menu }: { menu: Menu }) {
  const contextValue = useRestaurantMenu(menu);
  const { filteredMenu, categories, sectionRefs } = contextValue;

  return (
    <MenuContext.Provider value={contextValue}>
      <MenuHeader />
      <div className="mt-4 flex flex-col gap-8">
        {categories.map(({ id, label }) => {
          if (id === "drink" || !filteredMenu[id]) return null;
          return (
            <MenuSection
              key={id}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[id] = el;
              }}
              title={label}
              items={filteredMenu[id]}
            />
          );
        })}
        {filteredMenu.drink && (
          <div
            ref={(el) => {
              sectionRefs.current["drink"] = el;
            }}
          >
            <DrinksTabs drinks={filteredMenu.drink} />
          </div>
        )}
      </div>
    </MenuContext.Provider>
  );
}
