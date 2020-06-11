import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientsListComponent} from "./clients/clients-list/clients-list.component";
import {ClientsFormComponent} from "./clients/clients-form/clients-form.component";
import {SingleClientResolver} from "../resolvers/single-client.resolver";
import {VehicleListComponent} from "./vehicles/vehicles-list/vehicle-list.component";
import {VehiclesFormComponent} from "./vehicles/vehicles-form/vehicles-form.component";
import {SingleVehicleResolver} from "../resolvers/single-vehicle.resolver";
import {ClientDetailComponent} from "./clients/client-detail/client-detail.component";
import {AccessLogsListComponent} from "./access-logs/access-logs-list/access-logs-list.component";
import {UserListComponent} from "./users/users-list/user-list.component";
import {UsersFormComponent} from "./users/users-form/users-form.component";
import {SingleUserResolver} from "../resolvers/single-user.resolver";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'clients',
      component: ClientsListComponent
    },
    {
      path: 'clients/:id',
      component: ClientsFormComponent,
      resolve: {client: SingleClientResolver}
    },
    {
      path: 'profile/:id',
      component: ClientDetailComponent,
      resolve: {client: SingleClientResolver}
    },
    {
      path: 'profile/:id/create_vehicle',
      component: VehiclesFormComponent,
      resolve: {client: SingleClientResolver}
    },
    {
      path: 'vehicles',
      component: VehicleListComponent
    },
    {
      path: 'users',
      component: UserListComponent
    },
    {
      path: 'users/:id',
      component: UsersFormComponent,
      resolve: {user: SingleUserResolver}
    },
    {
      path: 'access-logs',
      component: AccessLogsListComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
