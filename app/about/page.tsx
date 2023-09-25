"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import PageLayout from "../components/PageLayout";
import OpenModal from "../components/Modal";
import Box from "../components/Box";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModalClick = () => {
    setIsModalVisible(true);
  };

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
        <PageLayout title="">
          <h2 className="text-4xl text-center font-extrabold dark:text-white">
            Get to know{" "}
            <button
              onClick={handleOpenModalClick}
              className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 hover:dark:text-indigo-400"
            >
              me
            </button>
            !
          </h2>
          <OpenModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
          <div className="text-black text-justify dark:text-white py-6 w-60 sm:w-96">
            <h3 className="text-xl text-left font-bold mt-6 dark:text-white">
              Education
            </h3>
            I graduated from the mathematics high school. Currently a student of
            the University of North, graduate study Multimedia. Successfully
            completed undergraduate study Multimedia, Design and Application and
            earned a bachelor&#39;s degree in multimedia engineering and graphic
            technologies (
            <span className="text-indigo-400 dark:text-indigo-500">
              bacc. ing. techn. graph.
            </span>
            ). I chose this major because of my love for music and videogames,
            but mostly because of my previous participation in school photo
            group, where I had two group photographic exhibitions. However, I
            became interested in the frontend development.
            <h3 className="text-xl text-left font-bold mt-6 dark:text-white">
              Certificates
            </h3>
            <Box
              title="Sofascore Academy Frontend Course"
              src="/img/diploma.jpg"
              projectLink="https://api.sofascore.com/api/v1/asset/sofascore-academy/50ba14abcbeb5d3419c9f90884c1d7ce"
              height="60"
            />
            <h3 className="text-xl text-left font-bold mt-6 dark:text-white w-96">
              Experience
            </h3>
            During my studies, I had the opportunity to do an internship in two
            companies where I gained advanced knowledge of the frontend. Worked
            with React.js, Next.js, Bootstrap. At Prolink I had the opportunity
            to work on 4 projects: ŽUC, Diana&#39;s Garden, Accordion 3D and the
            redesign of the Ćiro II app. Another company was Sofascore, where I
            had the opportunity to participate in the Frontend Academy. The
            final project was development of the Mini Sofascore web application,
            for which I used the Sofascore Academy API, Next.js and Typescript.
            In the final paper, I focused on React Native and creating a mobile
            application. This knowledge is also useful for mobile application
            development in the Choncha team.
          </div>
        </PageLayout>
      )}
    </>
  );
}
