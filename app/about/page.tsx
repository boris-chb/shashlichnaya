import { grotesk } from "@/app/layout";

export default function AboutPage() {
  return (
    <div className={`${grotesk.className} min-h-screen bg-white `}>
      {/* Hero Section */}
      <section
        className={`relative bg-cover bg-center h-[500px] flex items-center justify-center`}
        style={{
          backgroundImage:
            "url('https://sun9-77.userapi.com/s/v1/if2/VmyXpxQQgs8p3i127deOR09TU7vodZ82iJUF17s0qVfHYtE-MSITOD5fjpF_oKuwuzlRYXKYL826jcpzxZheRfS6.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&from=bu&cs=1280x0')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white drop-shadow-xl">
            {" "}
            Добро пожаловать в Горбуфет Шашлычная
          </h1>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
            Зарезервировать стол
          </button>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            место, где вкусы встречаются с душой!
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Мы создали пространство, где каждый гость ощущает себя как дома:
            расслабленная атмосфера, продуманный интерьер и тёплый приём всё для
            того, чтобы вы могли насладиться моментом.
          </p>
        </div>
      </section>
    </div>
  );
}
