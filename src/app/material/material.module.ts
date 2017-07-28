import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import {
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule,
	MdDialogModule, MdCheckboxModule, MdRadioModule,
	MdTabsModule, MdSelectModule, MdSliderModule,
	MdTableModule
} from '@angular/material';

const MD_MODULES = [
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule,
	MdDialogModule, MdCheckboxModule, MdRadioModule,
	MdTabsModule, MdSelectModule, MdSliderModule,
	MdTableModule, CdkTableModule
]

@NgModule({
  imports: [].concat(MD_MODULES),
  exports:[].concat(MD_MODULES),
  declarations: []
})
export class MaterialModule { }
