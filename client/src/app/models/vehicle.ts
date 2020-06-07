import {Client} from "./client";

export interface Vehicle {
  id?: number;
  plate: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  client?: Client | number;
}
