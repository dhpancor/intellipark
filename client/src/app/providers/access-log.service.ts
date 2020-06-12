import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseCRUD} from "./base-crud";
import {map} from "rxjs/operators";
import {AccessLog} from "../models/accesslog";

@Injectable({
  providedIn: 'root',
})
export class AccessLogService extends BaseCRUD<AccessLog> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "/access-logs");
  }

  averageTimeByGender() {
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/stats/averageTimeSpentByGender`)
      .pipe(map(result => result['data']));
  }

  averageBusyHours() {
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/stats/averageBusyHours`)
      .pipe(map(result => result['data']));
  }

  yearlyAccessesPerDay() {
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/stats/yearlyAccessesPerDay`)
      .pipe(map(result => result['data']));
  }

  todayStats() {
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/stats/todayStats`)
      .pipe(map(result => result['data']));
  }
}
