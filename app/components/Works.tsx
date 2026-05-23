import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Work = {
  title: string;
  description: string;
  tags: string[];
  github: string;
};

const works: Work[] = [
  {
    title: "Recipe App",
    description: "料理レシピを検索・保存できるWebアプリです。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
  },
  {
    title: "Task Manager",
    description: "タスクの管理・共有ができるシンプルなToDoアプリ。",
    tags: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/",
  },
  {
    title: "Portfolio Site",
    description: "こだわったつくりをサイトです。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
  },
];

export default function Works() {
  return (
    <section className="w-full bg-linear-to-br from-white to-blue-50 py-20">
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
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-video w-full bg-gray-200" />
              <div className="flex flex-1 flex-col gap-4 p-6">
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
                  className="mt-auto inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
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
