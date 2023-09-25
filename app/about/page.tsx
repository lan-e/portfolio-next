"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
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
        <PageLayout title="Get to know me!">
          <div className="text-black text-justify dark:text-white py-6 w-60 sm:w-96">
            I had the opportunity to participate in Sofascore Frontend Academy
            where I expanded my knowledge about React.js and Next.js. 🎓📚👩‍💻
            Worked independently on three websites and one app during
            internship. Currently working on two apps in React Native. As I
            continue my education, I&#39;m seeking a student internship or
            part-time role to further enhance my skills and contribute to
            exciting projects.
          </div>
        </PageLayout>
      )}
    </>
  );
}
