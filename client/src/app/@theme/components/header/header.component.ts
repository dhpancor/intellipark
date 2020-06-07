import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMenuService, NbSidebarService} from '@nebular/theme';

import {Subject} from 'rxjs';
import {User} from "../../../models/user";
import {UsersService} from "../../../providers/users.service";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  user: User = {name: 'Loading...'};

  userMenu = [{ title: 'Log out', link: '/auth/logout' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.whoAmI().subscribe(r => this.user = r);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
