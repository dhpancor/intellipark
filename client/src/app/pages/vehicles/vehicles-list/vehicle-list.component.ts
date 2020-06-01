import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {SortableDatatable} from "../../sortable-datatable";
import {VehiclesService} from "../../../providers/vehicles.service";
import {Vehicle} from "../../../models/vehicle";
import {EagerLoadingStrategy} from "../../../providers/types/eager-loading-strategy.enum";

@Component({
  selector: 'ngx-clients-list',
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent extends SortableDatatable<Vehicle> implements OnInit {
  columns = [
    {prop: 'id', name: '#'},
    {prop: 'plate', name: 'Plate number'},
    {prop: 'client.dni', name: 'Owner DNI'}];

  constructor(public vehiclesService: VehiclesService, public nbToastrService: NbToastrService) {
    super(vehiclesService, nbToastrService, EagerLoadingStrategy.CLIENT);
  }

  ngOnInit() {
  }
}
