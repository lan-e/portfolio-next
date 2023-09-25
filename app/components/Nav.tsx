"use client";
import ThemeSwitch from "./ThemeSwitcher";

export default function Nav() {
  return (
    <nav className="flex sm:flex-row justify-center items-center pb-10 pt-5">
      {[
        ["Projects", "/projects"],
        ["About", "/about"],
        ["Contact", "/contact"],
      ].map(([title, url]) => (
        <a
          key={url}
          href={url}
          className="font-bold px-2 py-2 text-slate-700 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          {title}
        </a>
      ))}
      <div className="ml-2">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
