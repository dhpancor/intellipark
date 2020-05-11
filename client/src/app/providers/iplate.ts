import {Observable} from 'rxjs';
import {Plate} from '../models/Plate';

export interface IPlate {
  getPlates(): Observable<Plate[]>;

  getPlate(id: number): Observable<Plate>;

  createPlate(plate: Plate): Observable<Plate>;

  editPlate(plate: Plate): Observable<Plate>;

  deletePlate(id: number): Observable<any>;
}
