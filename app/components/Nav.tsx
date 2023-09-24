"use client";
import ThemeSwitch from "./ThemeSwitcher";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center space-x-4">
      {[
        ["Home", "/"],
        ["Projects", "/projects"],
        ["About", "/about"],
        ["Contact", "/contact"],
      ].map(([title, url]) => (
        <a
          key={url}
          href={url}
          className="font-bold px-3 py-2 text-slate-700 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          {title}
        </a>
      ))}
      <ThemeSwitch />
    </nav>
  );
}