import {Client} from "./client";

export interface Vehicle {
  id?: string;
  plate: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  client?: Client;
}
