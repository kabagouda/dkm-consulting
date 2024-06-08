import { z } from "zod";

const stepSchema = z.object({
  name: z.string(),
  completed: z.boolean(),
});

export const updateStepsSchema = z.object({
  id: z.string(),
  steps: z.record(stepSchema),
});
