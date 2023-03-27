import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule, MatTableModule, MatBadgeModule, MatDialogModule, MatDividerModule, MatNativeDateModule, MatSlideToggleModule, MatDatepickerModule, MatSelectModule, MatProgressSpinnerModule,MatSnackBarModule]
})
export class MaterialModule { }
