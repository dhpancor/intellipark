import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {Vehicle} from "../../../models/vehicle";
import {VehiclesService} from "../../../providers/vehicles.service";

@Component({
  selector: 'ngx-vehicles-form',
  templateUrl: './vehicles-form.component.html',
})
export class VehiclesFormComponent implements OnInit {

  constructor(private vehiclesService: VehiclesService, public route: ActivatedRoute, private fb: FormBuilder,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  data: Vehicle = null;
  form: FormGroup = this.fb.group({
    plate: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {
    this.data = this.route.snapshot.data.vehicle;
    this.updateFormValues();
  }

  onFormSubmit(): void {
    if (this.form.valid && this.form.dirty) {
      this.data.plate = this.form.get('plate').value;

      if (this.route.snapshot.params.id === 'new') {
        this.vehiclesService.create(this.data).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      } else {
        this.vehiclesService.update(this.data).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      }
    }
  }

  updateFormValues(): void {
    this.form.setValue({
      plate: this.data.plate,
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
