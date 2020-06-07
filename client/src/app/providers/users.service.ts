import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseCRUD} from "./base-crud";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseCRUD<User> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "/users");
  }

  whoAmI(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + this.specificEndpoint + `/whoami`)
      .pipe(map(result => result['data']));
  }
}
