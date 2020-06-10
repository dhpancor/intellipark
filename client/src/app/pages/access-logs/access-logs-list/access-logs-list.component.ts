import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {SortableDatatable} from "../../sortable-datatable";
import {VehiclesService} from "../../../providers/vehicles.service";
import {Vehicle} from "../../../models/vehicle";
import {EagerLoadingStrategy} from "../../../providers/types/eager-loading-strategy.enum";
import {AccessLog} from "../../../models/accesslog";
import {AccessLogService} from "../../../providers/access-log.service";

@Component({
  selector: 'ngx-access-logs-list',
  templateUrl: './access-logs-list.component.html',
})
export class AccessLogsListComponent extends SortableDatatable<AccessLog> implements OnInit {
  columns = [
    {prop: 'id', name: '#'},
    {prop: 'plate', name: 'Plate number'},
    {prop: 'vehicle.client.dni', name: 'Client DNI'}];

  iterableColumns = [
    {prop: 'id', name: '#'}];

  constructor(public accessLogsService: AccessLogService, public nbToastrService: NbToastrService) {
    super(accessLogsService, nbToastrService, EagerLoadingStrategy.FULL_ACCESS_LOG);
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }
}
