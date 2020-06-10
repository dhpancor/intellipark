import {NgModule} from '@angular/core';
import {NbCardModule} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {BarChartModule, HeatMapModule, NumberCardModule} from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NumberCardModule,
    BarChartModule,
    HeatMapModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
