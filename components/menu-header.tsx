import { CategoryTabs } from "@/components/category-tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  return (
    <header
      className={`border-t-[1px] bg-background/95 supports-[backdrop-filter]:bg-background/75 border-primary/10 sticky top-20 z-40 border-b backdrop-blur`}
    >
      <div className="flex items-center justify-between px-2">
        <div className="relative w-1/2">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Поиск блюд"
            onChange={(e) => onSearchMenu(e.target.value)}
            className="bg-card border-border pl-10 w-full"
          />
        </div>
        <div className="w-1/2">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={onCategoryClick}
          />
        </div>
      </div>
    </header>
  );
}
