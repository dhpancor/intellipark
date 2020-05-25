import {Vehicle} from "./vehicle";

export interface Client {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dni: string;
  comments: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  Vehicles?: Vehicle[];
}
