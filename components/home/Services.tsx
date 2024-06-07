import {
  BookOpenIcon,
  MessagesSquareIcon,
  Settings2Icon,
  TabletSmartphoneIcon,
} from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Icon Blocks */}
      <div
        className="container 
        lg:max-w-screen-xl
       xl:container py-24 lg:py-32 "
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
              <TabletSmartphoneIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">
                Assistance pour l&apos;obtention de visas
              </h3>
              <p className="mt-1 text-muted-foreground">
                Nous vous guidons à chaque étape du processus de demande de
                visa.
              </p>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
              <Settings2Icon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">
                Conseils et consultations personnalisées
              </h3>
              <p className="mt-1 text-muted-foreground">
                Recevez des conseils adaptés à votre situation spécifique pour
                maximiser vos chances de succès.{" "}
              </p>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
              <BookOpenIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">
                Préparation et vérification des documents
              </h3>
              <p className="mt-1 text-muted-foreground">
                Nous vérifions et préparons vos documents pour garantir leur
                conformité et leur exactitude.
              </p>
            </div>
          </a>
          {/* End Icon Block */}
          {/* Icon Block */}
          <a
            className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
              <MessagesSquareIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Suivi des demandes</h3>
              <p className="mt-1 text-muted-foreground">
                Nous assurons le suivi de votre demande de visa et vous tenons
                informé de son avancement.
              </p>
            </div>
          </a>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
