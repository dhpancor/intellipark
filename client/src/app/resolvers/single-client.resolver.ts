import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Client} from "../models/client";
import {Observable} from "rxjs";
import {ClientsService} from "../providers/clients.service";

@Injectable({
  providedIn: 'root'
})
export class SingleClientResolver implements Resolve<Client> {

  constructor(private clientsService: ClientsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client> | Promise<Client> | Client {
    let client: Client = null;
    if (route.params.id === 'new') {
      client = {
        dni: "",
        active: true,
        comments: "",
        email: "",
        first_name: "",
        gender: "",
        last_name: ""
      };
      return client;
    } else {
      return this.clientsService.findOne(route.params.id);
    }
  }
}
