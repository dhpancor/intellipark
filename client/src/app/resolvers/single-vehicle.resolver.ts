import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Vehicle} from "../models/vehicle";
import {VehiclesService} from "../providers/vehicles.service";

@Injectable({
  providedIn: 'root'
})
export class SingleVehicleResolver implements Resolve<Vehicle> {

  constructor(private vehiclesService: VehiclesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehicle> | Promise<Vehicle> | Vehicle {
    let data: Vehicle = null;
    if (route.params.id === 'new') {
      data = {
        plate: ""
      };
      return data;
    } else {
      return this.vehiclesService.findOne(route.params.id);
    }
  }
}
