import {Component, OnInit} from "@angular/core";
import {ClientsService} from "../../../providers/clients.service";
import {Client} from "../../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {log} from "util";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-clients-form',
  templateUrl: './clients-form.component.html',
})
export class ClientsFormComponent implements OnInit {

  constructor(private clientService: ClientsService, public route: ActivatedRoute, private fb: FormBuilder,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  client: Client = null;
  form: FormGroup = this.fb.group({
    dni: ['', [Validators.required, Validators.minLength(8)]],
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(4)]],
    comments: [''],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.client = this.route.snapshot.data.client;
    this.updateFormValues();
  }

  onFormSubmit(): void {
    if (this.form.valid && this.form.dirty) {
      this.client.dni = this.form.get('dni').value;
      this.client.first_name = this.form.get('first_name').value;
      this.client.last_name = this.form.get('last_name').value;
      this.client.email = this.form.get('email').value;
      this.client.gender = this.form.get('gender').value;
      this.client.comments = this.form.get('comments').value;

      if (this.route.snapshot.params.id === 'new') {
        this.clientService.create(this.client).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      } else {
        this.clientService.update(this.client).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      }
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

  successfulOperation(): void {
    this.nbToastrService.show("Operation successful!", "Done", {status: 'success'});
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  operationError(): void {
    this.nbToastrService.show("There was an error. Try again please.", "Ooops!", {status: 'danger'});
  }
}
