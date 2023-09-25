import { useState } from "react";
import Box from "./Box";

export default function ProjectTabs() {
  const [isTabActive, setIsTabActive] = useState("web");

  const handleTabClick = (tab: string) => {
    setIsTabActive(tab);
  };
  let projects = [
    [
      "WeatherCast app",
      "https://final-weathercast.vercel.app/",
      "/img/program/weathercast.jpg",
      "React Native, Expo, OpenWeather API",
    ],
    [
      "Mini Sofascore",
      "https://minisofanela.vercel.app/",
      "img/program/sofa.jpg",
      "React, Next, Typescript, Zeplin, Sofascore API",
    ],
    [
      "Web shop",
      "https://sopgbakale.vercel.app/",
      "/img/program/sopgweb.jpg",
      "React, Next, Sanity, Stripe",
    ],
    [
      "Pokemon",
      "https://pokemon-api-sofa.vercel.app/",
      "/img/program/pokemon.jpg",
      "HTML, CSS, JS, Pokemon API",
    ],
    [
      "Trivia quiz",
      "https://trivia-quiz-sofa.vercel.app/",
      "/img/program/trivia.jpg",
      "HTML, CSS, JS, Bootstrap",
    ],
    [
      "Web page",
      "https://zuc-vz.vercel.app/",
      "/img/program/zuc.jpg",
      "HTML, CSS, JS, Bootstrap",
    ],
    [
      "Web shop",
      "https://accordion3d.vercel.app/",
      "/img/program/accordion.jpg",
      "HTML, CSS, JS, Bootstrap",
    ],
    [
      "Web shop/portfolio",
      "https://dianas-garden.vercel.app/",
      "/img/program/dianas.jpg",
      "HTML, CSS, JS, Bootstrap",
    ],
    [
      "My old portfolio",
      "https://portfolio-nela.vercel.app/",
      "/img/program/portfolio.jpg",
      "HTML, CSS, JS, Bootstrap",
    ],
  ];

  const projectsApp = [
    [
      "WeatherCast app",
      "https://expo.dev/@lan-e/weather-cast?serviceType=classic&distribution",
      "/img/program/weathernative.jpg",
      "React Native, Expo, OpenWeather API",
    ],
    [
      "Choncha app",
      "https://choncha.eu/?lang=en",
      "/img/program/chonchanative.jpg",
      "React Native, Expo, Vercel",
    ],
  ];

  return (
    <>
      <div className="flex flex-col items-center w-96">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 py-4">
          <li className="mr-2">
            <a
              href="#web"
              className={`inline-flex items-center justify-center p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                isTabActive === "web" ? "text-indigo-600 border-blue-600" : ""
              }`}
              aria-current="page"
              onClick={() => handleTabClick("web")}
            >
              <svg
                className={`w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  isTabActive === "web"
                    ? "text-indigo-600 border-blue-600 dark:text-indigo-600 dark:border-blue-600"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                />
              </svg>
              Web
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#apps"
              className={`inline-flex items-center justify-center p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group ${
                isTabActive === "apps" ? "text-indigo-600 border-blue-600" : ""
              }`}
              onClick={() => handleTabClick("apps")}
            >
              <svg
                className={`w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300 ${
                  isTabActive === "apps"
                    ? "text-indigo-600 border-blue-600 dark:text-indigo-600 dark:border-blue-600"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Apps
            </a>
          </li>
        </ul>

        {isTabActive === "web" ? (
          <div className="flex flex-col sm-flex-row">
            {projects.map(([title, projectLink, src, caption]) => (
              <Box
                key={projectLink}
                title={title}
                projectLink={projectLink}
                src={src}
                caption={caption}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col sm-flex-row">
            {projectsApp.map(([title, projectLink, src, caption]) => (
              <Box
                key={projectLink}
                title={title}
                projectLink={projectLink}
                src={src}
                caption={caption}
                height="96"
                width="48"
                widthSmall="48"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
