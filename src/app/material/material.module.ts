import { NgModule } from '@angular/core';
import {
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule
} from '@angular/material';

const MD_MODULES = [
	MdButtonModule, MdIconModule, MdToolbarModule,
	MdListModule, MdCardModule, MdProgressSpinnerModule
]

@NgModule({
  imports: [].concat(MD_MODULES),
  exports:[].concat(MD_MODULES),
  declarations: []
})
export class MaterialModule { }
