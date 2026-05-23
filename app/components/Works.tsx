import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BASE_PATH } from "../lib/basePath";

type Work = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  url?: string;
  image?: string;
};

const works: Work[] = [
  {
    title: "タスク管理アプリ",
    description: "タスクをカード形式で管理するシンプルなカンバンアプリ",
    tags: ["React", "TypeScript"],
    github: "https://github.com/r77tchan/kanban-app",
  },
  {
    title: "UI実装",
    description: "figmaのデザインデータからコーディングを実施",
    tags: ["ポートフォリオ", "Tailwind CSS"],
    github: "https://github.com/r77tchan/planet-hunters",
    url: "https://r77tchan.github.io/planet-hunters/",
    image: "/planet-hunters.png",
  },
  {
    title: "inazuma-eleven-db",
    description: "こだわったつくりをサイトです。",
    tags: ["個人開発", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/r77tchan/inazuma-eleven-db",
    url: "https://inazuma-eleven-db.vercel.app/",
    image: "/inazuma-eleven-db-light.png",
  },
];

export default function Works() {
  return (
    <section className="w-full bg-linear-to-br from-blue-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Works</h2>
          <span className="block h-0.5 w-12 bg-blue-600" />
          <p className="text-sm text-gray-600">制作実績</p>
        </div>
        <ul className="grid gap-8 md:grid-cols-3">
          {works.map((work) => (
            <li
              key={work.title}
              className={`relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg ${
                work.url ? "" : "cursor-not-allowed"
              }`}
            >
              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={work.title}
                  className="absolute inset-0 z-0"
                />
              )}
              <div className="pointer-events-none relative aspect-video w-full bg-gray-200">
                {work.image && (
                  <Image
                    src={`${BASE_PATH}${work.image}`}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="pointer-events-none flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-bold">{work.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {work.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
