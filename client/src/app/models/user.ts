export interface User {
  id?: number;
  email?: string;
  name?: string;
  password?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}
