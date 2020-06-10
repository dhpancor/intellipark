import {BaseCRUD} from "../providers/base-crud";
import {NbToastrService} from "@nebular/theme";
import {ElementRef, ViewChild} from "@angular/core";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {EagerLoadingStrategy} from "../providers/types/eager-loading-strategy.enum";
import * as _ from "lodash";
import {PagedData} from "../models/paged-data";

interface DatatableColumn {
  prop: string;
  name: string;
}

export class SortableDatatable<T> {
  currentFilter = null;
  temp: T[] = [];
  rows: T[] = [];
  page: PagedData<T[]> = {};
  columns: DatatableColumn[] = null;
  loadingIndicator = true;

  @ViewChild(DatatableComponent, {static: false}) table: DatatableComponent;
  @ViewChild("searchQuery", {static: false}) searchQuery: ElementRef;

  ColumnMode = ColumnMode;

  constructor(public crudService: BaseCRUD<T>, public nbToastrService: NbToastrService, public eagerLoading?: EagerLoadingStrategy) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  setPage(pageNumber) {
    this.loadingIndicator = true;
    this.page.pageNumber = pageNumber.offset;
    this.crudService.findPaginated(pageNumber.offset, this.eagerLoading).subscribe(r => {
      this.loadingIndicator = false;
      this.rows = r.data;
      this.temp = r.data;
      delete r.data;
      this.page = r;
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
        const property = _.get(d, this.currentFilter);
        if (property) {
          return property.toLowerCase().indexOf(val) !== -1 || !val;
        }
        // return _.get(d, this.currentFilter).toLowerCase().indexOf(val) !== -1 || !val;
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
