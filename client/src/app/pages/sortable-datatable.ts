import {BaseCRUD} from "../providers/base-crud";
import {NbToastrService} from "@nebular/theme";
import {ElementRef, ViewChild} from "@angular/core";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {EagerLoadingStrategy} from "../providers/types/eager-loading-strategy.enum";
import * as _ from "lodash";

interface DatatableColumn {
  prop: string;
  name: string;
}

export class SortableDatatable<T> {
  currentFilter = null;
  temp: T[] = [];
  rows: T[] = [];
  columns: DatatableColumn[] = null;
  loadingIndicator = true;

  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  @ViewChild("searchQuery", {static: false}) searchQuery: ElementRef;

  ColumnMode = ColumnMode;

  constructor(public crudService: BaseCRUD<T>, public nbToastrService: NbToastrService, public eagerLoading?: EagerLoadingStrategy) {
    this.crudService.findAll(eagerLoading).subscribe(r => {
      this.loadingIndicator = false;
      this.temp = r;
      this.rows = r;
    });
  }

  updateFilter(value) {
    this.currentFilter = value;
    this.searchQuery.nativeElement.value = "";
    this.filterResults(null);
  }

  filterResults(event) {
    if (event !== null) {
      const val = event.target.value.toLowerCase();
      this.rows = this.temp.filter(d => {
        return _.get(d, this.currentFilter).toLowerCase().indexOf(val) !== -1 || !val;
      });

      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    } else {
      this.rows = [...this.temp];
      this.table.offset = 0;
    }
  }

  deleteListItem(item: T) {
    this.crudService.delete(item['id']).subscribe(() => {
      this.temp = this.temp.filter(i => i !== item);
      this.rows = this.rows.filter(i => i !== item);
      this.nbToastrService.show(`Deleted successfully!`, `Done`);
    });
  }
}
