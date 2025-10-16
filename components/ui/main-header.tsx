import Link from "next/link";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

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
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            src="/bufet-logo.jpg"
            alt="logo"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-balance">
              {`Горбуфет Шашлычная`}
            </h1>
            <p className="text-muted-foreground text-xs">
              {`Домашние блюда, приготовленные с душой`}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            О нас
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-gray-900">
            Меню
          </Link>
        </div>
      </div>
    </header>
  );
}
