import {Component, OnInit} from '@angular/core';
import {AccessLogService} from "../../providers/access-log.service";

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(public acccessLogService: AccessLogService) {
  }

  averageTimeByGender = [];
  averageBusyHours = [];

  ngOnInit() {
    this.acccessLogService.averageTimeByGender().subscribe(r => this.averageTimeByGender = r);
    this.acccessLogService.averageBusyHours().subscribe(r => this.averageBusyHours = r);
  }
}
