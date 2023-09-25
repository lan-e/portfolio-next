import { useEffect } from "react";
import Image from "next/image";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

interface stateType {
  isModalVisible: boolean;
  setIsModalVisible: (isVIsible: boolean) => void;
}

export default function OpenModal({
  isModalVisible,
  setIsModalVisible,
}: stateType) {
  useEffect(() => {
    const $modalElement = document.querySelector("#modalEl") as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: "top-center",
      backdrop: "static",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    };

    const modal: ModalInterface = new Modal($modalElement, modalOptions);

    if (isModalVisible) {
      modal.show();
    }

    return () => {
      modal.hide();
    };
  }, [isModalVisible]);

  const handleCloseModalClick = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      id="modalEl"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 ${
        isModalVisible ? "" : "hidden"
      } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-slate-100 dark:bg-slate-800 text-black dark:text-white rounded-lg shadow">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              More about me
            </h3>
            <button
              onClick={handleCloseModalClick}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <h3 className="text-xl text-left font-bold mt-6 dark:text-white w-96">
              Other projects and experience
            </h3>
            <div className="text-justify">
              I have experience in Adobe programs - InDesign, Illustrator,
              Photoshop, Lightroom and other programs - Blender, DaVinci
              Resolve, Sony Vegas. In cooperation with my colleagues, I designed
              and produced the documentary film &#34;Živjeti ples&#34;, flavored
              honey &#34;Uvrnuta košnica&#34;, podcast Priče iz šupe and 3D
              animation &#34;The Hobbit&#34;. I recreated a scene from the
              famous movie &#34;Whiplash&#34;.
              <p className="pt-3">
                I participated in two photography exhibitions: „Začini život“
                and „Voće 2.0“. The photo of the coffee was already sold on the
                second day. From fruit exhibition, individual photos were
                selected and exhibited in &#34;Novinarski dom&#34; in Zagreb on
                the Nestle panel &#34;Healthy children in a healthier
                Croatia&#34;.
              </p>
            </div>
            <h3 className="text-xl text-left font-bold mt-6 dark:text-white w-96">
              Personality
            </h3>
            <div className="flex flex-col sm:flex-row justify-center justify-between">
              <ul className="pr-3 pb-6">
                <li>
                  : personality type:{" "}
                  <a
                    className="text-indigo-400 dark:text-indigo-500 hover:text-indigo-300 hover:dark:text-indigo-400"
                    href="https://www.16personalities.com/isfj-personality"
                    target="_blank"
                  >
                    ISFJ-T
                  </a>
                </li>
                <li>
                  : diligent, perfectionist, reliable, organized, team worker,
                  adaptable
                </li>
              </ul>
              <Image
                src="/img/profile.jpg"
                alt="me"
                width="200"
                height="200"
                className="pr-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
