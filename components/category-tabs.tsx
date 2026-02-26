"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useMenu } from "@/components/menu-context";

export function CategoryTabs() {
  const { categories, activeCategory, setActiveCategory } = useMenu();
  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const element = categoryRefs.current[activeCategory];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [activeCategory]);

  return (
    <div className="no-scrollbar flex w-full gap-2 overflow-x-auto rounded-full py-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          ref={(el) => {
            categoryRefs.current[category.id] = el;
          }}
          variant={activeCategory === category.id ? "default" : "secondary"}
          className="min-w-fit rounded-full shadow-sm transition-all duration-200"
          onClick={() => setActiveCategory(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
