import Image from "next/image";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import myIcon from "../../public/myicon.png";

interface PageTypes {
  children: any;
  title: string;
}

export default function PageLayout({ children, title }: PageTypes) {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-slate-100 dark:bg-slate-800">
      <a href="/">
        <Image key="icon" src={myIcon} alt="icon" width={50} height={50} />
      </a>
      <Nav />
      <PageTitle title={title} />
      {children}
    </main>
  );
}
