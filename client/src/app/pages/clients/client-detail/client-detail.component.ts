import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {AccessLog} from "../../../models/accesslog";
import * as moment from 'moment';

@Component({
  selector: 'ngx-client-detail',
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent implements OnInit {

  constructor(private clientService: ClientsService, public route: ActivatedRoute,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  client: Client;
  lastAccesses: AccessLog[] = [];

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
    this.clientService.lastAccesses(this.client.id).subscribe(r => this.lastAccesses = r);
  }

  getLocalDate(date: Date): string {
    return moment(date).format('LLL');
  }
}
