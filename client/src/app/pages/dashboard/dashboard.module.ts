import {NgModule} from '@angular/core';
import {NbCardModule} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {BarChartModule, NumberCardModule} from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NumberCardModule,
    BarChartModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
