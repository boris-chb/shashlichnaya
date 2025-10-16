"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export interface Dish {
  title: string;
  description: string;
  price: string;
  category?: string;
  image?: string;
  subcategory?: string;
  time_restriction?: string;
}

export function DishCard({
  title,
  description,
  price,
  image,
  time_restriction,
}: Dish) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full overflow-hidden rounded-lg py-0 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden">
          <Image
            src={isValidUrl(image ?? "") ? image! : "/no-image.png"}
            width={500}
            height={500}
            alt={title}
            className="aspect-square h-full w-full rounded-t-lg object-cover transition-all duration-500 hover:scale-125"
          />
        </div>

        <figcaption className="flex justify-between space-x-4 p-4">
          <div className="flex flex-col flex-1 gap-1">
            <h3 className="line-clamp-1 text-sm font-semibold leading-tight">
              {title}
            </h3>

            <p
              onClick={() => setExpanded((prev) => !prev)}
              className={cn(
                "flex flex-col text-xs leading-tight text-muted-foreground cursor-pointer",
                !expanded && "line-clamp-2"
              )}
            >
              {description || ""}
              {time_restriction && (
                <span className="text-xs text-muted-foreground">
                  {time_restriction}
                </span>
              )}
            </p>
          </div>

          <p className="flex-shrink-0 self-start whitespace-nowrap rounded-lg bg-accent p-1 font-bold text-primary">
            {price} р.
          </p>
        </figcaption>
      </div>
    </Card>
  );
}

function isValidUrl(url: string) {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
