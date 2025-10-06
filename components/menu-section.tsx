import { DishCard } from "@/components/dish";
import { DateTime } from "luxon";

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

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  const filteredItems = items.filter((item) =>
    isAvailableNow(item.time_restriction)
  );

  return (
    <section className="scroll-mb-[93px] px-4">
      <h2 className="mb-4 text-xl font-bold text-balance">{title}</h2>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item, i) => (
          <div key={`${item.name}-${i}`}>
            <DishCard
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              time_restriction={item.time_restriction}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

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
