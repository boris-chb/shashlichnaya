"use client";

import { DrinksTabs } from "@/components/drinks-tabs";
import { MenuHeader } from "@/components/menu-header";
import { Menu, MenuSection } from "@/components/menu-section";
import { useEffect, useRef, useState } from "react";

export default function RestaurantMenu({ menu }: { menu: Menu }) {
  const [activeCategory, setActiveCategory] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const categories = Object.keys(menu).map((key) => ({
    id: key,
    label: getCategoryLabel(key),
  }));

  useEffect(() => {
    const element = sectionRefs.current[activeCategory];
    if (activeCategory && element) {
      const headerHeight = 250;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="bg-background min-h-screen">
      <MenuHeader
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="flex flex-col gap-8 mt-4">
        {categories.map((category) => {
          if (category.id === "drink") return null;
          return (
            <MenuSection
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              key={category.id}
              title={category.label}
              items={menu[category.id]}
            />
          );
        })}
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["drink"] = el;
        }}
      >
        <DrinksTabs drinks={menu.drink} />
      </div>
    </div>
  );
}

function getCategoryLabel(key: string) {
  const labelMap: Record<string, string> = {
    main: "Прейскурант блюд",
    lunch: "Прейскурант на обед",
    night: "Ночное блюдо",
    drink: "Прейскурант напитков",
  };

  return labelMap[key] || key;
}
