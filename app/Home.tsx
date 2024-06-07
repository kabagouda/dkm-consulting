"use client";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import getDocument from "@/firebase/firestore/getData";
import { customer } from "@/types/customer";
import { customerAcessSchema } from "@/utils/validations/customerAcessSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();
  const form = useForm<Zod.infer<typeof customerAcessSchema>>({
    resolver: zodResolver(customerAcessSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  async function onSubmit(values: Zod.infer<typeof customerAcessSchema>) {
    const customerData = (
      await getDocument("customers", values.id)
    ).result?.data() as customer | undefined;

    if (values.password === customerData?.password) {
      router.push(`/${values.id}`);
    } else {
      console.log("Wrong password");
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="id">id</FormLabel>
                  <FormControl>
                    <Input id="id" {...field} className="col-span-3" />
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
          </div>
          <DialogFooter>
            <Button type="submit"> Se connecter </Button>
          </DialogFooter>
        </form>
      </Form>
    </main>
  );
}
