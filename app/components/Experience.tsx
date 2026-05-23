type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    period: "2022.04 - 現在",
    company: "ABC株式会社",
    role: "フロントエンドエンジニア",
    description:
      "Webアプリケーションのフロントエンド開発に従事。要件定義・設計から実装・テスト・リリースまでを担当。",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "GitHub"],
  },
  {
    period: "2020.04 - 2022.03",
    company: "DEF株式会社",
    role: "フロントエンドエンジニア",
    description:
      "コーポレートサイトやCMSの制作・運用、既存WebサービスのUI改善を担当。",
    tech: ["HTML", "CSS", "JavaScript (jQuery)", "PHP", "WordPress"],
  },
  {
    period: "2018.04 - 2020.03",
    company: "GHI株式会社",
    role: "コーダー",
    description: "Webサイトやページアップ業務を中心に、デザインの実装を担当。",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <span className="block h-0.5 w-12 bg-blue-600" />
          <p className="text-sm text-gray-600">経歴</p>
        </div>
        <ul className="relative mx-auto max-w-4xl">
          <span
            aria-hidden
            className="absolute top-8 bottom-8 left-1.25 w-px bg-gray-200"
          />
          {experiences.map((exp) => (
            <li
              key={exp.company}
              className="relative grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-2 border-b border-gray-100 py-8 last:border-0 md:grid-cols-[12px_160px_1fr] md:gap-x-8 md:gap-y-0"
            >
              <span className="mt-1.5 h-3 w-3 rounded-full bg-blue-600" />
              <p className="text-sm font-medium text-blue-600">{exp.period}</p>
              <div className="col-start-2 flex flex-col gap-3 md:col-start-3">
                <h3 className="text-lg font-bold">{exp.company}</h3>
                <p className="text-base font-bold">{exp.role}</p>
                <p className="text-sm leading-relaxed text-gray-700">
                  {exp.description}
                </p>
                <p className="text-sm text-gray-700">
                  ・使用技術：{exp.tech.join(" / ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
