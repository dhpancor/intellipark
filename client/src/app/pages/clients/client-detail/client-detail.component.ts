import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {AccessLog} from "../../../models/accesslog";
import * as moment from 'moment';
import {VehiclesService} from "../../../providers/vehicles.service";

@Component({
  selector: 'ngx-client-detail',
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent implements OnInit {

  constructor(private clientService: ClientsService, public route: ActivatedRoute,
              private nbToastrService: NbToastrService, public router: Router,
              private vehiclesService: VehiclesService) {
  }

  client: Client;
  lastAccesses: AccessLog[] = [];
  accessPerVehicle = [];
  lastTenVisitsTimeSpent = [];

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
    this.clientService.lastAccesses(this.client.id).subscribe(result => this.lastAccesses = result);

    // Fetch the data for the charts.
    this.clientService.accessPerClientVehicle(this.client.id).subscribe(result => this.accessPerVehicle = result);
    this.clientService.lastTenVisitsTimeSpent(this.client.id).subscribe(result => {
      this.lastTenVisitsTimeSpent = result.map(r => {
        return {
          ...r,
          name: moment(r.name).format('L')
        };
      }).reverse();
    });
  }

  getLocalDate(date: Date): string {
    return moment(date).format('LLL');
  }

  deleteVehicle(id: number) {
    return this.vehiclesService.delete(id).subscribe(() => {
      this.client.vehicle = this.client.vehicle.filter(v => v.id !== id);
      this.nbToastrService.show(`Deleted successfully!`, `Done`);
    });
  }
}
