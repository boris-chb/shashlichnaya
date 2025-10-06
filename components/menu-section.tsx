import { Card } from "@/components/ui/card";
import Image from "next/image";

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
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  console.log(items.slice(0, 2));
  return (
    <section className="scroll-mb-[93px] px-4">
      <h2 className="mb-4 text-xl font-bold text-balance">{title}</h2>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={`${item.name}-${i}`}>
            <DishCard
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export interface Dish {
  title: string;
  description: string;
  price: string;
  category?: string;
  image?: string;
  subcategory?: string;
}

export function DishCard({ title, description, price, image }: Dish) {
  return (
    <Card className="max-h-96 min-h-64 max-w-96 min-w-64 overflow-hidden rounded-lg py-0 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-full flex-col">
        {/* Image section - takes up most of the card */}
        <div className="flex-1 overflow-hidden">
          <Image
            src={image || "/no-image.png"}
            width={500}
            height={500}
            alt={title}
            className="h-full w-full rounded-t-lg object-cover hover:scale-125 transition-all duration-300"
          />
        </div>

        {/* Content section - compact area for text */}
        <div className="flex justify-between space-y-1 p-4">
          <div className="flex flex-col gap-1">
            <h3 className="line-clamp-1 text-sm leading-tight font-semibold">
              {title}
            </h3>
            <p className="text-muted-foreground text-xs leading-tight">
              {description}
            </p>
          </div>
          <p className="text-primary bg-accent rounded-lg p-1 font-bold whitespace-nowrap">
            {price} р.
          </p>
        </div>
      </div>
    </Card>
  );
}
