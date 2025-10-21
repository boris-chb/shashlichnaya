import { CategoryTabs } from "@/components/category-tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Category = {
  id: string;
  label: string;
};

type MenuHeaderProps = {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
  onSearchMenu: (query: string) => void;
};

export function MenuHeader({
  categories,
  activeCategory,
  onCategoryClick,
  onSearchMenu,
}: MenuHeaderProps) {
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
    <header className="border-t-[1px] bg-background/95 supports-[backdrop-filter]:bg-background/75 border-primary/10 sticky top-20 z-40 border-b backdrop-blur py-4">
      <div className="flex items-center justify-between px-2 gap-2 ">
        <div
          ref={searchRef}
          className={cn(
            "relative transition-all duration-200 ease-in-out flex-shrink-0",
            searchOpen ? "w-60" : "w-8 cursor-pointer"
          )}
          onClick={() => setSearchOpen(true)}
        >
          <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 p-0" />
          {searchOpen && (
            <Input
              autoFocus
              placeholder="Поиск блюд"
              onChange={(e) => onSearchMenu(e.target.value)}
              className="bg-card border-border pl-8 w-full pr-0"
            />
          )}
        </div>
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max ">
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryClick={onCategoryClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
