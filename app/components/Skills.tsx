import type { IconType } from "react-icons";
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  name: string;
  description: string;
  Icon: IconType;
  color: string;
};

const skills: Skill[] = [
  {
    name: "HTML5",
    description: "セマンティックなマークアップを意識した実装が可能です。",
    Icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    description: "Flexbox/Gridを用いたモダンなレイアウト設計に対応。",
    Icon: SiCss,
    color: "#663399",
  },
  {
    name: "JavaScript",
    description: "実務で5年以上の経験。DOM操作や非同期処理に習熟。",
    Icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    description: "型安全な設計で大規模アプリの開発経験あり。",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    description: "Hooksを中心としたコンポーネント設計が得意です。",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    description: "App Routerでの開発経験。SSG/SSRに対応可能。",
    Icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Tailwind CSS",
    description: "ユーティリティファーストで高速にUIを実装します。",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Redux",
    description: "Redux Toolkitを用いた状態管理の実装経験あり。",
    Icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "Firebase",
    description: "Authentication / Firestoreを用いた開発経験。",
    Icon: SiFirebase,
    color: "#DD2C00",
  },
  {
    name: "Git",
    description: "日常的にブランチ運用、コードレビューを実施。",
    Icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    description: "Issue/PR運用、GitHub Actionsでの自動化対応。",
    Icon: SiGithub,
    color: "#181717",
  },
  {
    name: "Figma",
    description: "デザインデータを正確に読み取り実装に落とし込めます。",
    Icon: SiFigma,
    color: "#F24E1E",
  },
];

export default function Skills() {
  return (
    <section className="w-full bg-linear-to-br from-blue-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <span className="block h-0.5 w-12 bg-blue-600" />
          <p className="text-sm text-gray-600">技術スタック</p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ name, description, Icon, color }) => (
            <li
              key={name}
              className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <Icon size={48} style={{ color }} />
              <h3 className="text-base font-bold text-gray-900">{name}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
