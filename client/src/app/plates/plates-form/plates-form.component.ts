import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, ValidationErrors, Validators} from '@angular/forms';
import {Plate} from '../../models/Plate';
import {PlateService} from '../../providers/plate.service';
import {NotificationService} from '../../providers/notification.service';

@Component({
  selector: 'app-plates-form',
  templateUrl: './plates-form.component.html',
  styleUrls: ['./plates-form.component.css']
})
export class PlatesFormComponent implements OnInit {

  creatingPlate: boolean;
  loadingRequest = false;
  plateObject: Plate = new Plate(null, '', '', 0, null, false);
  plateForm = this.fb.group({
    plate: ['', [Validators.required, this.validatePlate]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    accessLog: ['', [Validators.required, Validators.min(0), Validators.max(99999)]],
    accessType: ['', [Validators.required]],
    isActive: ['']
  });

    validatePlate(control: AbstractControl): ValidationErrors|null {
    return !/(\d{4}[\D\w]{3})/.exec(control.value) ? {validPlate: true} : null;
  }

  constructor(private plateService: PlateService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.creatingPlate = this.route.snapshot.paramMap.get('id') === 'new';
    if (!this.creatingPlate) {
      this.plateService.getPlate(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
        plate => {
          this.plateObject = plate;
          this.setFormFields();
        }
      );
    }
  }

  onSubmit() {
    this.loadingRequest = true;
    this.plateObject.plate = this.plateForm.get('plate').value;
    this.plateObject.description = this.plateForm.get('description').value;
    this.plateObject.accessLog = this.plateForm.get('accessLog').value;
    console.log(this.plateObject);

    if (this.creatingPlate) {
      this.plateService.createPlate(this.plateObject).subscribe(
        value => this.formSuccess(`Matrícula ${value.plate} creada.`),
        error => this.formError()
      );
    } else {
      this.plateService.editPlate(this.plateObject).subscribe(
        value => this.formSuccess(`Matrícula ${value.plate} editada.`),
        error => this.formError()
      );
    }
  }

  private setFormFields() {
    this.plateForm.get('plate').setValue(this.plateObject.plate);
    this.plateForm.get('description').setValue(this.plateObject.description);
    this.plateForm.get('accessType').setValue(this.plateObject.accessType);
    this.plateForm.get('accessLog').setValue(this.plateObject.accessLog);
    if (this.plateObject.isActive) { this.plateForm.get('isActive').setValue('checked'); }
  }

  private formSuccess(result: string) {
    this.notificationService.notificatorSnackbar(result);
    this.router.navigateByUrl('/plates');
  }

  private formError() {
    this.notificationService.notificatorSnackbar('Error. Inténtelo de nuevo.');
    this.loadingRequest = false;
  }

}
