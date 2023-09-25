"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProjectTabs from "../components/ProjectTabs";
import PageLayout from "../components/PageLayout";

export default function Projects() {
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
        <PageLayout title="Get to know me through my projects!">
          <ProjectTabs />
        </PageLayout>
      )}
    </>
  );
}
