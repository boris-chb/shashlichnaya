"use client";

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
    <div className="px-1 py-4">
      <div
        ref={containerRef}
        className="no-scrollbar flex gap-2 overflow-x-auto"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            ref={(el) => {
              categoryRefs.current[category.id] = el;
            }}
            className={`min-w-fit rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-blue-500 text-white shadow-md"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onCategoryClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
