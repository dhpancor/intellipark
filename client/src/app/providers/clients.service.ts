import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseCRUD} from "./base-crud";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends BaseCRUD<Client> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "/clients");
  }
}
