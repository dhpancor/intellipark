import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseCRUD} from "./base-crud";
import {Client} from "../models/client";
import {AccessLog} from "../models/accesslog";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends BaseCRUD<Client> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "/clients");
  }

  lastAccesses(id: number): Observable<AccessLog[]> {
    return this.httpClient.get<AccessLog[]>(this.baseUrl + this.specificEndpoint + `/${id}/accesses`)
      .pipe(map(result => result['data']));
  }

  accessPerClientVehicle(id: number) {
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/${id}/stats/accessPerVehicle`)
      .pipe(map(result => result['data']));
  }
}
