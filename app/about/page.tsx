import { grotesk } from "@/app/layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className={`${grotesk.className} bg-background text-foreground`}>
      {/* Hero Section */}
      <section
        className="relative flex h-125 items-center justify-center bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold drop-shadow-xl lg:text-4xl xl:text-5xl">
            Добро пожаловать в Горбуфет Шашлычная
          </h1>
          <Link
            href="https://taplink.cc/alkobufet.shashlik"
            className="bg-primary hover:bg-primary/90 text-primary-foreground inline-block rounded-full px-8 py-3 font-semibold transition duration-300"
          >
            Зарезервировать стол
          </Link>
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">
            место, где вкусы встречаются с душой!
          </h2>
          <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
            Мы создали пространство, где каждый гость ощущает себя как дома:
            расслабленная атмосфера, продуманный интерьер и тёплый приём всё для
            того, чтобы вы могли насладиться моментом.
          </p>
        </div>
      </section>
    </div>
  );
}
