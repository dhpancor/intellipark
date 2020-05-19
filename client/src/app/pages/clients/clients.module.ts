import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ClientsListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxDatatableModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    RouterModule
  ]
})
export class ClientsModule { }
