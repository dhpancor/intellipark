import {Vehicle} from "./vehicle";

export interface AccessLog {
  id?: number;
  plate: string | null;
  vehicle?: Vehicle | null;
  createdAt?: Date | null;
  leaveTime?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}
