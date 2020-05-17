import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {NbCardModule, NbInputModule, NbSelectModule} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [ClientsListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxDatatableModule,
    NbInputModule,
    NbSelectModule
  ]
})
export class ClientsModule { }
