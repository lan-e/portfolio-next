"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import PageLayout from "../components/PageLayout";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  const icons: [IconDefinition, string][] = [
    [faPhone, "tel:097/723-8354"],
    [faEnvelope, "mailto:neladuranec@gmail.com"],
    [faLinkedin, "https://www.linkedin.com/in/nela-duranec/"],
    [faGithub, "https://github.com/lan-e"],
  ];
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PageLayout title="Let's work together!">
          <div className="flex justify-between w-60">
            {icons.map(([icon, link]) => (
              <a
                href={link}
                key={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  style={{ height: 40 }}
                  className="text-slate-700 dark:text-white hover:text-slate-300 dark:hover:text-slate-600"
                />
              </a>
            ))}
          </div>
        </PageLayout>
      )}
    </>
  );
}
