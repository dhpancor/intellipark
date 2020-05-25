import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {NbToastrService} from "@nebular/theme";
import {SortableDatatable} from "../../sortable-datatable";

@Component({
  selector: 'ngx-clients-list',
  templateUrl: './clients-list.component.html',
})
export class ClientsListComponent extends SortableDatatable<Client> implements OnInit {
  columns = [
    {prop: 'id', name: '#'},
    {prop: 'dni', name: 'DNI'},
    {prop: 'first_name', name: 'First Name'},
    {prop: 'last_name', name: 'Last Name'},
    {prop: 'email', name: 'Email'},
    {prop: 'gender', name: 'Gender'}];

  constructor(public clientsService: ClientsService, public nbToastrService: NbToastrService) {
    super(clientsService, nbToastrService);
  }

  ngOnInit() {
  }

}
