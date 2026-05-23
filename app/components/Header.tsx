import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-lg font-bold tracking-tight">T.A Portfolio</span>
        <a
          href="https://github.com/r77tchan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-300 hover:text-white"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </header>
  );
}
