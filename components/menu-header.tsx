import { CategoryTabs } from "@/components/category-tabs";
import { MenuSearch } from "@/components/menu-search";

export function MenuHeader() {
  return (
    <header className="bg-background/75 border-primary/10 sticky top-0 z-40 flex items-center justify-between gap-2 border-b p-2 backdrop-blur">
      <MenuSearch />
      <div className="flex min-w-0 flex-1 gap-2">
        <CategoryTabs />
      </div>
    </header>
  );
}
