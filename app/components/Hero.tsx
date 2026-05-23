import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/hero.png"
        alt="Workspace with laptop, plant, and coffee cup"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative mx-auto flex min-h-120 max-w-6xl items-center px-6 py-16 md:min-h-140 md:py-24">
        <div className="flex max-w-md flex-col gap-5 rounded-lg bg-white/60 p-6 backdrop-blur-sm">
          <p className="text-sm text-gray-600">Hello, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            asakawa
          </h1>
          <p className="text-lg font-medium text-blue-600">
            Front-end Engineer
          </p>
          <p className="text-sm leading-relaxed text-gray-600">
            ユーザー体験を大切にした、使いやすく美しい
            Webサイト・Webアプリケーションを作ります。
          </p>
          <div className="mt-2">
            <a
              href="https://github.com/r77tchan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
