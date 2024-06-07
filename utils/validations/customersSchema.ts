import { z } from "zod";

const stepSchema = z.object({
  name: z.string(),
  completed: z.boolean(),
});
export const customersSchema = z.object({
  firstname: z.string().min(1, "Le prénom est obligatoire"),
  lastname: z.string().min(1, "Le nom est obligatoire"),
  email: z.string().email({ message: "L'email n'est pas valide" }).trim(),
  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit comporter au moins 8 caractères.",
    })
    .regex(/[a-zA-Z]/, {
      message: "Le mot de passe doit contenir au moins une lettre.",
    })
    .regex(/[0-9]/, {
      message: "Le mot de passe doit contenir au moins un chiffre.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Le mot de passe doit contenir au moins un caractère spécial.",
    })
    .trim(),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Le numéro de téléphone n'est pas valide"),
  visaType: z.enum(["Étudiant", "Visiteur"], {
    required_error: "Le type de visa est obligatoire",
  }),
  steps: z.array(stepSchema).optional(),
});
