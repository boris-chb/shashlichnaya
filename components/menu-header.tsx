import { CategoryTabs } from "@/components/category-tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Category = {
  id: string;
  label: string;
};

type CategoryTabsProps = {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
};

export function MenuHeader({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryTabsProps) {
  return (
    <header
      className={` bg-background/95 supports-[backdrop-filter]:bg-background/75 border-primary/10 sticky top-24 z-50 border-b backdrop-blur`}
    >
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            placeholder="Поиск блюд"
            className="bg-card border-border pl-10"
          />
        </div>
      </div>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={onCategoryClick}
      />
    </header>
  );
}
