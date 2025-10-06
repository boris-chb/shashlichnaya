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
      <main className="pb-6">
        <DrinksTabs />
        <div className="space-y-8">
          {categories.map((category) => (
            <div
              key={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
            >
              <MenuSection title={category.label} items={menu[category.id]} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function getCategoryLabel(key: string) {
  const labelMap: Record<string, string> = {
    main: "ПРЕЙСКУРАНТ БЛЮД",
    lunch: "ПРЕЙСКУРАНТ НА ОБЕД",
    night: "НОЧНОЕ БЛЮДО",
    drink: "ПРЕЙСКУРАНТ НАПИТКОВ",
  };
  return labelMap[key] || key;
}
