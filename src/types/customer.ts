export type customer = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  visaType: "Étudiant" | "Visiteur";
  password: string;
  createdAt: Date;
  updatedAt: Date;
  steps?: Step[];
};

type Step = {
  name: string;
  completed: boolean;
};
