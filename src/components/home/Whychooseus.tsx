import { Brain, Check } from "lucide-react";
import Image from "next/image";

export const Whytochooseus = () => {
  return (
    <div
      className=" relative bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background"
      id="pourquoi-nous-choisir"
    >
      <div className="py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-6">
        <div className=" dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:7/12 lg:w-1/2">
            <Image
              src={"/images/agence-de-voyage.png"}
              width={800}
              alt="agence de voyage"
              height={800}
            />
          </div>
          <div className="md:5/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              Nos années d&apos;expérience dans le domaine des visas
              garantissent un service de qualité. Nous avons aidé des milliers
              de clients à obtenir leur visa avec succès.
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 items-center justify-center flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <Brain />
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                    Connaissances approfondies
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Nous maîtrisons les procédures de visa complexes.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <Check />
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                    Fiabilité éprouvée
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Des résultats prouvés avec un taux de réussite élevé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
