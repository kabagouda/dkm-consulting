"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import getDocument from "@/firebase/firestore/getData";
import { customer } from "@/types/customer";
import { customerAcessSchema } from "@/utils/validations/customerAcessSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "cookies-next";
import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Container } from "../general/Container";
import ModeToggle from "../general/modetoggle";

import { DialogFooter } from "@/components/ui/dialog";

const routes = [
  {
    href: "/",
    label: "Acceuil",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#pourquoi-nous-choisir",
    label: "Pourquoi nous choisir",
  },
  {
    href: "#a-propos",
    label: "A propos",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Navigation = () => {
  const form = useForm<Zod.infer<typeof customerAcessSchema>>({
    resolver: zodResolver(customerAcessSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  async function onSubmit(values: Zod.infer<typeof customerAcessSchema>) {
    toast.info("Connexion en cours");
    const customerData = (
      await getDocument("customers", values.id)
    ).result?.data() as customer | undefined;

    if (values.password === customerData?.password) {
      const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
      const cookieid = `${values.id}`;
      const cookiepass = `${values.password}`;
      setCookie("id", cookieid, {
        expires: expiresAt,
      });
      setCookie("pass", cookiepass, {
        expires: expiresAt,
      });
      toast.success("Connecté avec succès");
      router.push(`/client/${values.id}`);
    } else {
      toast.error("Mauvais identifiants");
      console.log("Wrong password");
    }
  }
  const router = useRouter();
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px] sm:w[400px]">
                <nav className=" flex flex-col gap-4 mt-5">
                  {routes.map((route, i) => (
                    <Button asChild key={i} variant={"ghost"}>
                      <Link
                        key={i}
                        href={route.href}
                        className="text-sm font-medium transition-colors"
                      >
                        {route.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="ml-4 lg:ml-0">
              <p className="text-xl font-bold">DKM</p>
            </Link>
          </div>

          <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild key={i} variant={"ghost"}>
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-semibold transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger>
                <Button variant={"default"}>
                  <span className="pr-3">Se connecter</span>
                  <MoveRight className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid gap-4 py-4">
                      <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="id">
                              Votre identifiant
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="id"
                                {...field}
                                className="col-span-3"
                              />
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
                            <FormLabel htmlFor="password">
                              votre mot de passe
                            </FormLabel>
                            <FormControl>
                              <Input
                                id="password"
                                {...field}
                                className="col-span-3"
                              />
                            </FormControl>
                            <FormMessage className="col-span-4 text-red-500"></FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit"> Se connecter </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>

            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
