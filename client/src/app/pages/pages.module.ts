import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ClientsModule} from './clients/clients.module';
import {VehiclesModule} from './vehicles/vehicles.module';
import {AccessLogsModule} from "./access-logs/access-logs.module";
import {UsersModule} from "./users/users.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ClientsModule,
    VehiclesModule,
    AccessLogsModule,
    UsersModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
