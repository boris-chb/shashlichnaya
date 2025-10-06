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
            src={image || "/no-image.png"}
            width={500}
            height={500}
            alt={title}
            className="h-full w-full rounded-t-lg object-cover hover:scale-125 transition-all duration-500"
          />
        </div>
        <div className="flex justify-between space-x-4 p-4">
          <div className="flex-1 flex flex-col gap-1">
            <h3 className="line-clamp-1 text-sm leading-tight font-semibold">
              {title}
            </h3>
            <div
              className="cursor-pointer"
              onClick={() => setExpanded((prev) => !prev)}
            >
              <p
                className={cn(
                  "text-muted-foreground text-xs leading-tight flex flex-col",
                  !expanded && "line-clamp-2"
                )}
              >
                {description || ""}

                {time_restriction && (
                  <>
                    <span className="text-muted-foreground text-xs">
                      {time_restriction}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
          <p className="flex-shrink-0 text-primary bg-accent rounded-lg p-1 font-bold whitespace-nowrap self-start">
            {price} р.
          </p>
        </div>
      </div>
    </Card>
  );
}
