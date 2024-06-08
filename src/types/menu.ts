export type Menu = {
  id: number;
  label: string;
  path: string;
  newtab?: boolean;
  icon: React.ReactNode;
  children?: Menu[];
};
