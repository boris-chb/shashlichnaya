import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-14 gap-16 sm:p-20">
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start">
        <Link
          href="/menu"
          className="relative after:absolute after:left-0 after:bottom-[0px] after:h-[1px] after:w-full after:bg-current after:scale-x-0 after:transition-all after:duration-200 hover:after:scale-x-100"
        >
          Меню
        </Link>
        <Link
          href={"/about"}
          className="relative after:absolute after:left-0 after:bottom-[0px] after:h-[1px] after:w-full after:bg-current after:scale-x-0 after:transition-all after:duration-200 hover:after:scale-x-100"
        >
          О нас
        </Link>
      </main>
    </div>
  );
}
