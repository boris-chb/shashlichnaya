import { DishCard } from "@/components/dish";
import { cn } from "@/lib/utils";
import { DateTime } from "luxon";
import { forwardRef, HTMLAttributes } from "react";

export interface Menu {
  [key: string]: MenuItem[];
}

export interface MenuItem {
  id: number;
  category: string;
  subcategory?: string;
  name: string;
  description: string;
  price: string;
  image: string;
  time_restriction?: string;
}

export interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: MenuItem[];
}

export const MenuSection = forwardRef<HTMLDivElement, MenuSectionProps>(
  ({ title, items, className, ...rest }, ref) => {
    const filteredItems = items.filter((item) =>
      isAvailableNow(item.time_restriction)
    );

    return (
      <section
        {...rest}
        ref={ref}
        className={cn(`scroll-mb-[93px] px-4`, className)}
      >
        <h2 className="mb-4 text-xl md:text-3xl font-bold text-balance">
          {title}
        </h2>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredItems.map((item, i) => (
            <DishCard
              key={`${item.name}-${i}`}
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";

function isAvailableNow(timeRestriction?: string) {
  if (!timeRestriction) return true;

  const [start, end] = timeRestriction.split("-").map((t) => t.trim());
  const now = DateTime.now().setZone("Europe/Moscow");

  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);

  const startTime = now.set({ hour: startH, minute: startM, second: 0 });
  const endTime = now.set({ hour: endH, minute: endM, second: 0 });

  return now >= startTime && now <= endTime;
}
