"use client";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Box from "./components/Box";
import PageLayout from "./components/PageLayout";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PageLayout title={"Hi! I'm Nela."}>
          <Box
            title="This is my portfolio!"
            projectLink="https://portfolio-nela.vercel.app/"
          />
        </PageLayout>
      )}
    </>
  );
}
