import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseCRUD} from "./base-crud";
import {Vehicle} from "../models/vehicle";

@Injectable({
  providedIn: 'root',
})
export class VehiclesService extends BaseCRUD<Vehicle> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "/vehicles");
  }
}
