import { z } from "zod";

export const customerAcessSchema = z.object({
  id: z.string().min(1, "l'identifiant est obligatoire"),
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
});
