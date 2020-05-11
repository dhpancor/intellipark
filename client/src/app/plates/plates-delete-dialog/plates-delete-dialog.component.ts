import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface DialogData {
  plate: string;
  result: boolean;
}

@Component({
  selector: 'app-plates-delete-dialog',
  templateUrl: './plates-delete-dialog.component.html',
  styleUrls: ['./plates-delete-dialog.component.css']
})
export class PlatesDeleteDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PlatesDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  passResult(result: boolean) {
    this.dialogRef.close(result);
  }

}
