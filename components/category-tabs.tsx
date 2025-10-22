"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type Category = {
  id: string;
  label: string;
};

type CategoryTabsProps = {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
};

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryTabsProps) {
  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = categoryRefs.current[activeCategory];
    const container = containerRef.current;
    if (element && container) {
      const containerWidth = container.offsetWidth;
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      container.scrollTo({
        left: elementLeft - containerWidth / 2 + elementWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-2 py-2 overflow-x-scroll w-full"
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          ref={(el) => {
            categoryRefs.current[category.id] = el;
          }}
          className={cn(
            "shadow-sm min-w-fit rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200",
            activeCategory === category.id
              ? "bg-amber-400/75 border border-amber-950/40 text-amber-950 hover:bg-amber-200/75"
              : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
          )}
          onClick={() => onCategoryClick(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
