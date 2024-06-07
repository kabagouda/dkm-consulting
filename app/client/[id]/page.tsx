import getDocument from "@/firebase/firestore/getData";
import { customer } from "@/types/customer";
import { Check, CircleDot } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const customersData = await getDocument("customers", params.id);
  if (!customersData.result) {
    return <div>Loading...</div>;
  }
  const cookieId = cookies().get("id")?.value;
  const cookiePassword = cookies().get("pass")?.value;
  const data = customersData.result.data() as customer;

  if (cookieId !== params.id || cookiePassword !== data.password) {
    redirect("/");
  }

  return (
    <div>
      {data && typeof data === "object" ? (
        <div className="flex items-center justify-center py-12 md:py-24">
          <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center space-x-4">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  alt="Profile Picture"
                  src="/images/placeholder-user.jpg"
                  height={96}
                  width={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold dark:text-gray-200">
                  {data.firstname} {data.lastname}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data.email}
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Identifiant
                  </p>
                  <p className="text-base font-medium dark:text-gray-200">
                    {params.id}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Visa
                  </p>
                  <p className="text-base font-medium dark:text-gray-200">
                    {data.visaType}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-base font-medium dark:text-gray-200">
                    {data.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Téléphone
                  </p>
                  <p className="text-base font-medium dark:text-gray-200">
                    {data.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-blue-100 px-4 rounded-lg mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h2 className="text-lg font-bold dark:text-gray-200">Étapes</h2>

              <div className="mt-4 space-y-4">
                {data.steps &&
                  data.steps.map((step, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 dark:border-gray-700"
                    >
                      <div className="text-md font-medium dark:text-gray-200">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Étape {index + 1}
                        </p>
                        <p>{step.name}</p>
                      </div>

                      <div className="flex items-center space-x-2 mt-2 justify-end">
                        {step.completed ? (
                          <>
                            <p className="text-sm font-medium dark:text-green-400">
                              Terminé
                            </p>
                            <Check className=" dark:text-green-400" />
                          </>
                        ) : (
                          <>
                            <p className="text-sm font-medium dark:text-gray-200">
                              En attente
                            </p>
                            <CircleDot />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
