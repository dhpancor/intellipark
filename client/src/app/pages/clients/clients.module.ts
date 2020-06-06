import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule, NbListModule,
  NbSelectModule
} from "@nebular/theme";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {RouterModule} from "@angular/router";
import {ClientsFormComponent} from "./clients-form/clients-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ClientDetailComponent} from "./client-detail/client-detail.component";

@NgModule({
  declarations: [ClientsListComponent, ClientsFormComponent, ClientDetailComponent],
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
    NbActionsModule,
    NbListModule
  ]
})
export class ClientsModule {
}
