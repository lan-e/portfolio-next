"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Box from "../components/Box";
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
          {[
            ["Mini Sofascore", "https://minisofanela.vercel.app/"],
            ["Web shop", "https://sopgbakale.vercel.app/"],
            ["Pokemon", "https://pokemon-api-sofa.vercel.app/"],
            ["Trivia quiz", "https://trivia-quiz-sofa.vercel.app/"],
            ["Web page", "https://zuc-vz.vercel.app/"],
            ["Web shop", "https://accordion3d.vercel.app/"],
            ["Web shop/portfolio", "https://dianas-garden.vercel.app/"],
            [
              "WeatherCast app (web version)",
              "https://final-weathercast.vercel.app/",
            ],
          ].map(([title, projectLink]) => (
            <Box key={projectLink} title={title} projectLink={projectLink} />
          ))}
        </PageLayout>
      )}
    </>
  );
}
