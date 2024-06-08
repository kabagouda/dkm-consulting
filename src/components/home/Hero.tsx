import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background">
        {/* Hero */}
        <div
          className="container 
        lg:max-w-screen-xl
       xl:container m-auto px-6  md:px-12 xl:px-16
     py-10 lg:py-12"
        >
          {/* Grid */}
          <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-8 lg:items-center">
            <div className="lg:col-span-4">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Simplifiez votre voyage vers le Canada avec DKM Consulting
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                Nous vous aidons à obtenir votre visa facilement et rapidement.
              </p>
              <div className="mt-5 lg:mt-8 flex flex-col sm:items-center gap-2 sm:flex-row sm:gap-3">
                <Button className="w-min">Obtenir mon Visa</Button>
              </div>
              {/* Brands */}
              <div className="mt-6 lg:mt-12">
                <span className="text-xs font-medium uppercase">
                  pays pris en charge:
                </span>
                <div className="mt-4 flex gap-x-4">
                  <Image
                    className="max-w-8 max-h-8"
                    src="/images/visa-canada.png"
                    alt="canada"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="max-w-8 max-h-8"
                    src="/images/visa-france.png"
                    alt="france"
                    width={200}
                    height={200}
                  />
                  <Image
                    className="max-w-8 max-h-8"
                    src="/images/visa-belgium.png"
                    alt="belgium"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              {/* End Brands */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-3 mt-10 lg:mt-0">
              <Image
                src="/images/dkm-consulting.png"
                alt="Agence de voyage dkm"
                width={800}
                height={400}
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </div>
    </>
  );
}
