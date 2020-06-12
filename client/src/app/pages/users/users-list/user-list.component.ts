import {Component, OnInit} from '@angular/core';
import {NbToastrService} from "@nebular/theme";
import {SortableDatatable} from "../../sortable-datatable";
import {UsersService} from "../../../providers/users.service";
import {User} from "../../../models/user";

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent extends SortableDatatable<User> implements OnInit {
  columns = [
    {prop: 'id', name: '#'},
    {prop: 'name', name: 'Name'},
    {prop: 'email', name: 'Email'}];


  constructor(public usersService: UsersService, public nbToastrService: NbToastrService) {
    super(usersService, nbToastrService);
  }

  ngOnInit() {
    this.crudService.findAll().subscribe(r => {
      this.loadingIndicator = false;
      this.rows = r;
      this.temp = r;
    });
  }
}
