import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {UsersService} from "../../../providers/users.service";
import {User} from "../../../models/user";

@Component({
  selector: 'ngx-users-form',
  templateUrl: './users-form.component.html',
})
export class UsersFormComponent implements OnInit {

  constructor(private usersService: UsersService, public route: ActivatedRoute, private fb: FormBuilder,
              private nbToastrService: NbToastrService, private router: Router) {
  }

  user: User = null;
  form: FormGroup;

  ngOnInit(): void {
    if (this.route.snapshot.params.id === 'new') {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(4)]],
        name: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    } else {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.minLength(4)]],
        name: ['', [Validators.required, Validators.minLength(2)]],
        password: [''],
      });
    }
    this.user = this.route.snapshot.data.user;
    this.updateFormValues();
  }

  onFormSubmit(): void {
    if (this.form.valid && this.form.dirty) {
      this.user.name = this.form.get('name').value;
      this.user.email = this.form.get('email').value;
      this.user.password = this.form.get('password').value;
      if (this.route.snapshot.params.id === 'new') {
        this.usersService.create(this.user).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      } else {
        this.usersService.update(this.user).subscribe(r => r !== null ? this.successfulOperation() : this.operationError());
      }
    }
  }

  updateFormValues(): void {
    this.form.setValue({
      name: this.user.name,
      email: this.user.email,
      password: ''
    });
  }

  successfulOperation(): void {
    this.nbToastrService.show("Operation successful!", "Done", {status: 'success'});
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  operationError(): void {
    this.nbToastrService.show("That email is already being used.", "Ooops!", {status: 'danger'});
  }
}
