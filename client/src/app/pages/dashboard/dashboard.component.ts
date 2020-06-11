import {Component, OnInit} from '@angular/core';
import {AccessLogService} from "../../providers/access-log.service";
import * as moment from 'moment';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(public acccessLogService: AccessLogService) {
  }

  averageTimeByGender = [];
  averageBusyHours = [];
  yearlyAccessesPerDay = [];
  todayStats = [];

  ngOnInit() {
    this.acccessLogService.averageTimeByGender().subscribe(r => this.averageTimeByGender = r);
    this.acccessLogService.averageBusyHours().subscribe(r => this.averageBusyHours = r);
    this.acccessLogService.yearlyAccessesPerDay().subscribe(r => {
      const accessDict: { [date: string]: number} = {};
      r.forEach(i => accessDict[moment(i.date).format()] = i.count);
      this.yearlyAccessesPerDay = this.resultsToCalendar(accessDict);
    });
    this.acccessLogService.todayStats().subscribe(r => this.todayStats = r);
  }

  private resultsToCalendar(results): any[] {
    const data = [];

    // today
    const now = new Date();
    const todaysDay = now.getDate();
    const thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);

    // Monday
    const thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
    const thisMondayDay = thisMonday.getDate();
    const thisMondayYear = thisMonday.getFullYear();
    const thisMondayMonth = thisMonday.getMonth();

    const getDate = d => new Date(thisMondayYear, thisMondayMonth, d);
    for (let week = -52; week <= 0; week++) {
      const mondayDay = thisMondayDay + week * 7;
      const monday = getDate(mondayDay);

      // a week
      const series = [];

      for (let dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
        const date = getDate(mondayDay - 1 + dayOfWeek);

        // skip future dates
        if (date > now) {
          continue;
        }

        // value
        const value = results[moment(date).format()] ? results[moment(date).format()] : 0;

        series.push({
          date,
          name: moment(date).format('dddd'),
          value
        });
      }

      data.push({
        name: monday.toString(),
        series
      });
    }

    return data;
  }

  calendarAxisTickFormatting(mondayString: string) {
    const monday = new Date(mondayString);
    const month = monday.getMonth();
    const day = monday.getDate();
    const year = monday.getFullYear();
    const lastSunday = new Date(year, month, day - 1);
    const nextSunday = new Date(year, month, day + 6);
    return lastSunday.getMonth() !== nextSunday.getMonth() ? moment(nextSunday).format('MMM') : '';
  }

  calendarTooltipText(c): string {
    return `
      <span class="tooltip-label">${c.label} • ${c.cell.date.toLocaleDateString()}</span>
      <span class="tooltip-val">${c.data.toLocaleString()}</span>
    `;
  }
}
