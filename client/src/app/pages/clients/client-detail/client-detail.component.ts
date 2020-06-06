import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-client-detail',
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent implements OnInit {

  constructor(private clientService: ClientsService, public route: ActivatedRoute,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  client: Client;

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
  }
}
