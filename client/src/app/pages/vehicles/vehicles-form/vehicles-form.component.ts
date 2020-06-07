import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {VehiclesService} from "../../../providers/vehicles.service";
import {Client} from "../../../models/client";
import {Vehicle} from "../../../models/vehicle";

@Component({
  selector: 'ngx-vehicles-form',
  templateUrl: './vehicles-form.component.html',
})
export class VehiclesFormComponent implements OnInit {

  constructor(private vehiclesService: VehiclesService, public route: ActivatedRoute, private fb: FormBuilder,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  data: Client = null;
  form: FormGroup = this.fb.group({
    plate: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    this.data = this.route.snapshot.data.client;
  }

  onFormSubmit(): void {
    if (this.form.valid && this.form.dirty) {
      if (this.data.vehicle.filter(v => v.plate === this.form.get('plate').value).length > 0) {
        this.nbToastrService.show("That vehicle is already registered for this client.", "Ooops!", {status: 'danger'});
      } else {
        const vehicle: Vehicle = {
          plate: this.form.get('plate').value,
          client: this.data.id
        };

        this.vehiclesService.create(vehicle).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      }
    }
  }

  successfulOperation(): void {
    this.nbToastrService.show("Operation successful!", "Done", {status: 'success'});
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  operationError(): void {
    this.nbToastrService.show("There was an error. Probably another client has registered this vehicle.", "Ooops!", {status: 'danger'});
  }
}
