import {Component, OnInit, ViewChild} from '@angular/core';
import {Plate} from '../../models/Plate';
import {PlateService} from '../../providers/plate.service';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {PlatesDeleteDialogComponent} from '../plates-delete-dialog/plates-delete-dialog.component';
import {NotificationService} from '../../providers/notification.service';

@Component({
  selector: 'app-plates-list',
  templateUrl: './plates-list.component.html',
  styleUrls: ['./plates-list.component.css']
})
export class PlatesListComponent implements OnInit {

  plateList: Plate[] = [];
  dataSource = new MatTableDataSource(this.plateList);
  displayedColumns: string[] = ['id', 'plate', 'description', 'accessLog', 'isActive', 'star'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private plateService: PlateService, private router: Router,
              private dialog: MatDialog, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.plateService.getPlates().subscribe(
      val => {
        this.plateList = val;
        this.dataSource = new MatTableDataSource<Plate>(this.plateList);
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteDialog(id: number, plate: string) {
    this.dialog.open(PlatesDeleteDialogComponent, {data: {id, plate}})
      .afterClosed()
      .subscribe(
        result => {
          if (result) {
            this.plateService.deletePlate(id).subscribe(
              () => {
                this.notificationService.notificatorSnackbar(`La matricula ${plate} ha sido eliminada.`);
                this.ngOnInit(); // This way we can refresh a component without a full reload!
              }
            );
          }
        }
      );
  }

}
