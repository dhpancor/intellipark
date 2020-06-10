import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccessLogsListComponent} from "./access-logs-list/access-logs-list.component";
import {RouterModule} from "@angular/router";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AccessLogsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbSelectModule,
    NbCardModule,
    NgxDatatableModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbIconModule
  ]
})
export class AccessLogsModule {
}
