import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatesListComponent} from './plates-list/plates-list.component';
import {RouterModule, Routes} from '@angular/router';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material';
import {PlatesFormComponent} from './plates-form/plates-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PlatesDeleteDialogComponent} from './plates-delete-dialog/plates-delete-dialog.component';
import {LiveGarageComponent} from './live-garage/live-garage.component';

const routes: Routes = [
  {path: '', component: PlatesListComponent},
  {path: ':id', component: PlatesFormComponent}
];

@NgModule({
  declarations: [PlatesListComponent, PlatesFormComponent, PlatesDeleteDialogComponent, LiveGarageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ],
  entryComponents: [PlatesDeleteDialogComponent]
})
export class PlatesModule { }
