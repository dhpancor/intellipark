import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'ngx-clients-list',
  templateUrl: './clients-list.component.html',
})
export class ClientsListComponent implements OnInit {
  currentFilter = null;
  temp = [];
  rows = [];
  columns = [{ prop: 'name', display: 'Name' }, { prop: 'gender', display: 'Gender' }, { prop: 'company', display: 'Company' }];
  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  @ViewChild("searchQuery", {static: false}) searchQuery: ElementRef;


  ColumnMode = ColumnMode;

  constructor() {
    // once we fetch the data, we store it in temp
    // and rows
    const data = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' }
    ];
    this.temp = data;
    this.rows = data;
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
