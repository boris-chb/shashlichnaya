import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CategoryTabs } from "@/components/category-tabs";

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
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border sticky top-0 z-50 border-b backdrop-blur">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image src="/bufet-logo.jpg" alt="logo" width={50} height={50} />
          <div>
            <h1 className="text-lg font-bold text-balance">
              {`Алко-буфет "Шашлычная"`}
            </h1>
            <p className="text-muted-foreground text-xs">
              {`Fine Dining Experience`}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            placeholder="Поиск блюд..."
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
