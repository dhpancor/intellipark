import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./users-list/user-list.component";
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
import {UsersFormComponent} from "./users-form/users-form.component";

@NgModule({
  declarations: [UserListComponent, UsersFormComponent],
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
export class UsersModule {
}
