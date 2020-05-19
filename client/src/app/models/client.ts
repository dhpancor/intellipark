export interface Client {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dni: string;
  comments: string | null;
  active: boolean;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}
