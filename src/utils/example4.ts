export type User = {
  description?: string | undefined;
  id: string;
  name: string;
  participants: {
    id: string;
    name: string;
    email: string;
  }[];
};
