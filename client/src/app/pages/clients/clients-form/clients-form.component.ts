import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {log} from "util";

@Component({
  selector: 'ngx-clients-form',
  templateUrl: './clients-form.component.html',
})
export class ClientsFormComponent implements OnInit {

  constructor(private clientService: ClientsService, public route: ActivatedRoute, private fb: FormBuilder) {
  }

  client: Client = null;
  form: FormGroup = this.fb.group({
    dni: [''],
    first_name: [''],
    last_name: [''],
    comments: [''],
    email: [''],
    gender: [''],
  });

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
    this.updateFormValues();
  }

  onFormSubmit(): void {
    this.client.dni = this.form.get('dni').value;
    this.client.first_name = this.form.get('first_name').value;
    this.client.last_name = this.form.get('last_name').value;
    this.client.email = this.form.get('email').value;
    this.client.gender = this.form.get('gender').value;
    this.client.comments = this.form.get('comments').value;

    if (this.route.snapshot.params.id === 'new') {
      this.clientService.create(this.client).subscribe(r => console.log(r));
    } else {
      this.clientService.update(this.client).subscribe(r => console.log(r));
    }
  }

  updateFormValues(): void {
    this.form.setValue({
      dni: this.client.dni,
      first_name: this.client.first_name,
      last_name: this.client.last_name,
      email: this.client.email,
      gender: this.client.gender,
      comments: this.client.comments,
    });
  }
}
