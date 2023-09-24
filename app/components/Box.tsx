interface TitleType {
  title: string;
  projectLink: string;
}
export default function Box({ title, projectLink }: TitleType) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg my-2 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-300 dark:bg-indigo-500 hover:bg-indigo-200 hover:dark:bg-indigo-400 rounded-md shadow-lg">
          <a href={`${projectLink}`} target="_blank">
            Open
          </a>
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm w-96"></p>
    </div>
  );
}