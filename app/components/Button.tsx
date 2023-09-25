interface BtnType {
  title: string;
}

export default function Button({ title }: BtnType) {
  return (
    <div className="p-2 text-black dark:text-white bg-indigo-300 dark:bg-indigo-500 hover:bg-indigo-200 hover:dark:bg-indigo-400 rounded-lg shadow-lg">
      <h3 className="text-slate-900 dark:text-white text-center font-medium tracking-tight">
        {title}
      </h3>
    </div>
  );
}
