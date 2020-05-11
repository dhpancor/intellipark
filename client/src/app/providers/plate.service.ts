import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlate} from './iplate';
import {Observable} from 'rxjs';
import {Plate} from '../models/Plate';

@Injectable({
  providedIn: 'root'
})
export class PlateService implements IPlate {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlates(): Observable<Plate[]> {
    return this.http.get<Plate[]>(`${this.baseUrl}/plates`);
  }

  getPlate(id: number): Observable<Plate> {
    return this.http.get<Plate>(`${this.baseUrl}/plates/${id}`);
  }

  createPlate(plate: Plate): Observable<Plate> {
    delete plate.id;
    return this.http.post<Plate>(`${this.baseUrl}/plates`, plate);
  }

  editPlate(plate: Plate): Observable<Plate> {
    return this.http.put<Plate>(`${this.baseUrl}/plates/${plate.id}`, plate);
  }

  deletePlate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/plates/${id}`);
  }
}
