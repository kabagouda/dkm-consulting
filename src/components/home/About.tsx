import Image from "next/image";

export const About = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="a-propos"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={"/images/agence-de-voyage-canada.jpg"}
              width={400}
              height={400}
              alt="agence de voyage canada"
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={"/images/agence-de-voyage-togo-canada.jpg"}
              width={600}
              height={600}
              alt="agence de voyage canada au togo"
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={"/images/visa-etude-canada.jpg"}
              width={800}
              height={800}
              alt="visa etude canada"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Laissez-nous gérer
              <br className="hidden md:block" />
              votre prochaine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                destination
              </span>
            </h2>
            <p className="text-base dark:text-white  text-gray-700 md:text-lg">
              DKM Consulting est une agence de voyage spécialisée dans
              l&apos;assistance pour l&apos;obtention de visas, avec une
              expertise particulière pour les demandes de visas vers le Canada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
