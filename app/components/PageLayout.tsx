import Nav from "./Nav";
import PageTitle from "./PageTitle";

interface PageTypes {
  children: any;
  title: string;
}

export default function PageLayout({ children, title }: PageTypes) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-100 dark:bg-slate-800">
      <Nav />
      <PageTitle title={title} />
      {children}
    </main>
  );
}
