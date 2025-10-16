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
      <div className="flex h-full flex-col p-2 rounded-lg overflow-hidden">
        <div className="flex-1 relative overflow-hidden rounded-lg">
          <Image
            src={isValidUrl(image ?? "") ? image! : "/no-image.png"}
            width={500}
            height={500}
            alt={title}
            className="aspect-square h-full w-full object-cover transition-all duration-300 hover:scale-115"
          />

          <p className="shadow-lg select-none absolute bottom-2 right-2 rounded-lg bg-amber-300/95 border-1 border-amber-50 px-2 py-1 font-bold text-amber-950">
            {price}₽
          </p>
        </div>

        <figcaption className="flex justify-between px-2 py-2">
          <div className="flex flex-col flex-1 gap-1 justify-center">
            <h3 className="text-md md:text-sm md:line-clamp-1 font-semibold leading-tight">
              {title}
            </h3>

            {description && (
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
