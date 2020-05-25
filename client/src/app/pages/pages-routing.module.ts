import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientsListComponent} from "./clients/clients-list/clients-list.component";
import {ClientsFormComponent} from "./clients/clients-form/clients-form.component";
import {SingleClientResolver} from "../resolvers/single-client.resolver";
import {VehicleListComponent} from "./vehicles/vehicles-list/vehicle-list.component";

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
      path: 'vehicles',
      component: VehicleListComponent
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
