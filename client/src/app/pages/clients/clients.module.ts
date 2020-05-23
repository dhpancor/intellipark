import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule} from "@angular/router";
import {ClientsFormComponent} from "./clients-form/clients-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ClientsListComponent, ClientsFormComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxDatatableModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    RouterModule,
    ReactiveFormsModule,
    NbIconModule,
    NbActionsModule
  ]
})
export class ClientsModule { }
