interface titleType {
  title: string;
}

export default function PageTitle({ title }: titleType) {
  return (
    <h2 className="text-4xl text-center font-extrabold dark:text-white py-6">
      {title}
    </h2>
  );
}
