import Link from "next/link";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { MenuDropdown } from "@/components/ui/menu-dropdown";

export function MainHeader({
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        ` bg-background/95 supports-[backdrop-filter]:bg-background/75 border-primary/10 sticky top-0 z-50 backdrop-blur`,
        className
      )}
      {...rest}
    >
      <div className="flex items-center justify-between px-2 py-4 gap-2">
        <div className="flex items-center ">
          <Image
            src="/bufet-logo.jpg"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full p-1"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-balance">
              {`Горбуфет Шашлычная`}
            </h1>
            <p className="text-muted-foreground text-xs">
              {`Домашние блюда, приготовленные с душой`}
            </p>
          </div>
        </div>

        <div className="flex gap-2 basis-1/4 items-center justify-center lg:justify-end lg:pr-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            О нас
          </Link>
          <MenuDropdown />
        </div>
      </div>
    </header>
  );
}
