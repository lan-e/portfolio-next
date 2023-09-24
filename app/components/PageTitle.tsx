interface titleType {
  title: string;
}
export default function PageTitle({ title }: titleType) {
  return <h1 className="text-black dark:text-white py-6">{title}</h1>;
}
