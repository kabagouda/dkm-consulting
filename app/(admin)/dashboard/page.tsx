"use client";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomersTable } from "@/components/Users/CustomersTable";
import { Input } from "@/components/ui/input";
import addData from "@/firebase/firestore/addData";
import { getCollection } from "@/firebase/firestore/getData";
import { customersSchema } from "@/utils/validations/customersSchema";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CustomerPage() {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { documents, error } = await getCollection("customers");
        setDocuments(documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col bg-muted/40 rounded-md">
        <div className="flex flex-col sm:gap-4 sm:py-4 ">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center">
              <h2 className="text-2xl font-extrabold">Clients</h2>
              <div className="ml-auto flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-7 gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Ajouter un Client
                      </span>
                    </Button>
                  </DialogTrigger>
                  <Dialogform></Dialogform>
                </Dialog>
              </div>
            </div>
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Clients</CardTitle>
                <CardDescription>
                  Vous pouvez ici ajouter ou supprimer des clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CustomersTable data={documents} />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
}

function Dialogform() {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const [open, setOpen] = React.useState(false);

  const form = useForm<Zod.infer<typeof customersSchema>>({
    resolver: zodResolver(customersSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  async function onSubmit(values: Zod.infer<typeof customersSchema>) {
    toast.info("Enregistrement en cours...");

    const data = values;
    const id =
      data.lastname.slice(0, 3) + data.firstname.slice(0, 3) + Date.now();

    const db = getFirestore();
    const customersRef = collection(db, "customers");
    const emailQuery = query(customersRef, where("email", "==", data.email));
    const phoneQuery = query(
      customersRef,
      where("phoneNumber", "==", data.phoneNumber)
    );

    try {
      const [emailSnapshot, phoneSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(phoneQuery),
      ]);

      if (emailSnapshot.size > 0 || phoneSnapshot.size > 0) {
        toast.error("Cet email ou ce numéro de téléphone est déjà utilisé.");
        return;
      }

      let steps: { name: string; completed: boolean }[] = [];

      if (data.visaType === "Étudiant") {
        steps = [
          { name: "Admission dans une école", completed: false },
          { name: "Analyse du dossier", completed: false },
          { name: "Attente de reponse", completed: false },
          { name: "Biométrie", completed: false },
          {
            name: "Constitution du dossier de la demande de visa",
            completed: false,
          },
          { name: "Demande de CAQ/LAP", completed: false },
          { name: "Demande de visa", completed: false },
          { name: "Réception du passeport", completed: false },
          { name: "Soumission du dossier", completed: false },
          { name: "Soumission du passport", completed: false },
          { name: "Visite médicale", completed: false },
        ];
      } else if (data.visaType === "Visiteur") {
        steps = [
          { name: "Analyse du dossier", completed: false },
          { name: "Lettre d'invitation", completed: false },
          {
            name: "Constitution du dossier de la demande de visa",
            completed: false,
          },
          { name: "Visite médicale", completed: false },
          { name: "Soumission du passport", completed: false },
          { name: "Réception du passeport", completed: false },
        ];
      }
      data.steps = steps;
      await addData("customers", id, data);
      toast.success("Client ajouté avec succès");
      window.location.reload();
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement");
    }
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Ajouter un Client</DialogTitle>
        <DialogDescription>
          Ajouter les informations du client
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastname">Nom</FormLabel>
                  <FormControl>
                    <Input id="lastname" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage className="col-span-4 text-red-500"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstname">Prénom</FormLabel>
                  <FormControl>
                    <Input id="firstname" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage className="col-span-4 text-red-500"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input id="email" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage className="col-span-4 text-red-500"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">Mot de passe</FormLabel>
                  <FormControl>
                    <Input id="password" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage className="col-span-4 text-red-500"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phoneNumber">
                    Numéro de téléphone
                  </FormLabel>
                  <FormControl>
                    <Input id="phoneNumber" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage className="col-span-4 text-red-500"></FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visaType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>visaType</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir le Type de visa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Étudiant">Visa Étudiant</SelectItem>
                      <SelectItem value="Visiteur">Visa Visiteur</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Ajouter le client</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
