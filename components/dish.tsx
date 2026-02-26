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
    <Card className="w-full overflow-hidden rounded-lg py-0 shadow-lg transition-shadow hover:shadow-xl">
      <div className="flex h-full flex-col overflow-hidden rounded-lg p-2">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <Image
            src={isValidUrl(image ?? "") ? image! : "/no-image.png"}
            width={500}
            height={500}
            alt={title}
            className="aspect-square h-full w-full object-cover transition-all duration-300 hover:scale-115"
          />

          <p className="absolute right-2 bottom-2 rounded-lg border border-amber-50 bg-amber-300/95 px-2 py-1 font-bold text-amber-950 shadow-lg select-none">
            {price}₽
          </p>
        </div>

        <figcaption className="flex justify-between px-2 py-2">
          <div className="flex flex-1 flex-col justify-center gap-1">
            <h3 className="text-md leading-tight font-semibold md:line-clamp-1 md:text-sm">
              {title}
            </h3>

            {description && (
              <p
                onClick={() => setExpanded(!expanded)}
                className={cn(
                  "text-muted-foreground flex cursor-pointer flex-col text-xs leading-tight",
                  !expanded && "line-clamp-2",
                )}
              >
                {description || ""}
                {time_restriction && (
                  <span className="text-muted-foreground text-xs">
                    {time_restriction}
                  </span>
                )}
              </p>
            )}
          </div>
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
