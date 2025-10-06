import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-14 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link href={"/menu"}>Меню</Link>
      </main>
      <footer className="row-start-3 flex flex-col items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
        <p>© 2025 Шашлычная</p>
        <p className="text-xs">С любовью приготовлено для вас ❤️</p>
      </footer>
    </div>
  );
}
