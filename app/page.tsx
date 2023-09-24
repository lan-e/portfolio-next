"use client";
import Box from "./components/Box";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout title={"Hi! I'm Nela."}>
      <Box
        title="This is my portfolio!"
        projectLink="https://portfolio-nela.vercel.app/"
      />
    </PageLayout>
  );
}
