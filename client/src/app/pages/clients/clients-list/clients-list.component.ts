import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";

@Component({
  selector: 'ngx-clients-list',
  templateUrl: './clients-list.component.html',
})
export class ClientsListComponent implements OnInit {
  currentFilter = null;
  temp: Client[] = [];
  rows: Client[] = [];
  columns = [
    { prop: 'id', name: '#'},
    { prop: 'dni', name: 'DNI' },
    { prop: 'first_name', name: 'First Name' },
    { prop: 'last_name', name: 'Last Name' },
    { prop: 'email', name: 'Email' },
    { prop: 'gender', name: 'Gender' },
    { prop: 'active', name: 'Active' }];
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  @ViewChild("searchQuery", {static: false}) searchQuery: ElementRef;


  ColumnMode = ColumnMode;

  constructor(private clientsService: ClientsService) {
    this.clientsService.findAll().subscribe(clients => {
      this.temp = clients;
      this.rows = clients;
    });
  }

  ngOnInit() {
  }

  updateFilter(value) {
    this.currentFilter = value;
    this.searchQuery.nativeElement.value = "";
    this.filterResults(null);
  }

  filterResults(event) {
    if (event !== null) {
      const val = event.target.value.toLowerCase();
      this.rows = this.temp.filter(d => d[this.currentFilter].toLowerCase().indexOf(val) !== -1 || !val);
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    } else {
      this.rows = [...this.temp];
      this.table.offset = 0;
    }
  }

}
