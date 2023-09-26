import Button from "./Button";

interface BoxProps {
  title: string;
  projectLink: string;
  src: string;
  caption?: string;
  height?: string;
  width?: string;
  widthSmall?: string;
}

export default function Box({
  title,
  projectLink,
  src,
  caption,
  height = "60",
  width = "96",
  widthSmall = "60",
}: BoxProps) {
  return (
    <div
      className={`bg-center bg-cover rounded-md my-2 shadow-xl w-${widthSmall} sm:w-${width}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div
        className={`flex flex-col justify-around bg-opacity-80 sm:bg-opacity-100 dark:bg-opacity-80 dark:sm:bg-opacity-100 bg-white dark:bg-slate-900 hover:bg-opacity-80 hover:dark:bg-opacity-80 rounded px-6 py-8 h-${height}`}
      >
        <a href={`${projectLink}`} target="_blank" rel="noopener noreferrer">
          <Button title={title} />
        </a>
        <div className="text-slate-600 dark:text-slate-400 text-center text-sm">
          {caption}
        </div>
      </div>
    </div>
  );
}
