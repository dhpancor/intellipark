import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {UsersService} from "../providers/users.service";

@Injectable({
  providedIn: 'root'
})
export class SingleUserResolver implements Resolve<User> {

  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    let user: User = null;
    if (route.params.id === 'new') {
      user = {
        name: "",
        email: "",
        password: ""
      };
      return user;
    } else {
      return this.usersService.findOne(route.params.id);
    }
  }
}
