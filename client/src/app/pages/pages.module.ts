import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ClientsModule} from './clients/clients.module';
import {VehiclesModule} from './vehicles/vehicles.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ClientsModule,
    VehiclesModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
