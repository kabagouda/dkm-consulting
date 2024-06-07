"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import firebase_app from "@/firebase/config";
import { customer } from "@/types/customer";
import { updateStepsSchema } from "@/utils/validations/stepsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Switch } from "../ui/switch";

type UpdateStepsFormData = z.infer<typeof updateStepsSchema>;

export function UpdateSteps({ customerData }: { customerData: customer }) {
  const [formData, setFormData] = useState<UpdateStepsFormData>({
    id: customerData.id,
    steps: Object.fromEntries(
      (customerData.steps || []).map((step) => [step.name, step])
    ),
  });

  useEffect(() => {
    setFormData({
      id: customerData.id,
      steps: Object.fromEntries(
        (customerData.steps || []).map((step) => [step.name, step])
      ),
    });
  }, [customerData]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateStepsFormData>({
    resolver: zodResolver(updateStepsSchema),
    defaultValues: formData,
  });

  const db = getFirestore(firebase_app);
  const onSubmit = async (data: UpdateStepsFormData) => {
    toast.info("Mise à jour des étapes en cours");
    const customerRef = doc(db, "customers", data.id);
    await updateDoc(customerRef, { steps: Object.values(data.steps) });
    toast.success("Les étapes ont été mises à jour avec succès");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Identifiant du client</label>
        <Input id="id" value={formData.id} disabled />
      </div>
      {Object.entries(formData.steps).map(([stepName, step]) => (
        <div key={stepName} className="mt-4">
          <label className="flex items-center justify-between space-x-3">
            <span>{stepName}</span>
            <Controller
              name={`steps.${stepName}.completed`}
              control={control}
              defaultValue={step.completed}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              )}
            />
          </label>
        </div>
      ))}
      <Button type="submit" className="mt-4">
        Mettre à jour les étapes
      </Button>
    </form>
  );
}
