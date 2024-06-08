import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background"
        id="contact"
      >
        <div className="   mx-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-24">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Prenez Rendez-Vous pour une Consultation
              </p>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                  Commencez dès maintenant votre voyage vers le Canada
                </h1>
                <p className="text-xl text-muted-foreground">
                  Remplissez le formulaire ci-dessous pour planifier une
                  consultation personnalisée et découvrir comment nous pouvons
                  vous aider.
                </p>
              </div>
              {/* End Title */}
              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-foreground/10"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-xl italic">
                    Chez DKM Consulting, nous nous engageons à transformer vos
                    rêves de voyage en réalité.
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="grow ms-4">
                      <div className="font-semibold">
                        Directeur de DKM Consulting
                      </div>
                      <div className="text-xs text-muted-foreground">2024 </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div>
              {/* Form */}
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <Card>
                    <CardHeader className="text-center">
                      <h2 className="text-2xl font-semibold leading-none tracking-tight">
                        Planifiez votre consultation personnalisée dès
                        aujourd&apos;hui
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-5">
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="Nom " />
                          <Input placeholder="Prénom" />
                          <Input placeholder="Adresse e-mail" />
                          <Input placeholder="Numéro de téléphone" />

                          <Input
                            className="col-span-2 h-10"
                            placeholder="message"
                            type="textarea"
                          />

                          <Button className="mt-3 col-span-2">Envoyer</Button>
                        </div>
                        {/* Grid End */}
                      </div>
                    </CardContent>
                  </Card>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Clients Section */}
          <div className="mt-6 md:mt-12 py-3 flex items-center text-muted-foreground text-sm gap-x-1.5 after:flex-[1_1_0%] after:border-t after:ms-6 after:border-t-muted-foreground/50">
            <span className="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              +de 100
            </span>
            personnes sont satisfaites de nos services
          </div>
          {/* Clients */}
          {/* <div className="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-24">
            Lise des images des client minimum 50
          </div> */}
          {/* End Clients */}
        </div>
        {/* End Clients Section */}
      </div>
      {/* End Hero */}
    </>
  );
}
