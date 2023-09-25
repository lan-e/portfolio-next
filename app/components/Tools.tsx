import Image from "next/image";

export default function Tools() {
  const icons = [
    ["/icons/html.svg", "htmlIcon"],
    ["/icons/css.svg", "cssIcon"],
    ["/icons/js.svg", "jsIcon"],
    ["/icons/ts.svg", "tsIcon"],
    ["/icons/figma.svg", "figmaIcon"],
    ["/icons/nextjs.svg", "nextjsIcon"],
    ["/icons/react.svg", "reactIcon"],
    ["/icons/tailwind.svg", "tailwindIcon"],
    ["/icons/bootstrap.svg", "bootstrapIcon"],
  ];
  return (
    <div className="flex flex-wrap justify-center py-12 w-60 sm:w-96">
      {icons.map(([src, alt]) => (
        <div
          key={src}
          className="rounded-full shadow-lg m-1 p-2 bg-indigo-200 dark:bg-indigo-500 hover:bg-indigo-100 hover:dark:bg-indigo-400"
        >
          <Image src={src} alt={alt} width="50" height="50" />
        </div>
      ))}
    </div>
  );
}
