import { NgModule } from '@angular/core';
import {
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule
} from '@angular/material';

const Mat_MODULES = [
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule, MatTableModule
]

@NgModule({
  imports: [].concat(Mat_MODULES),
  exports:[].concat(Mat_MODULES),
  declarations: []
})
export class MaterialModule { }
