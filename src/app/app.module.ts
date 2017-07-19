import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
import 'hammerjs';
import { ContainerComponent } from './components/container/container.component';
import { ChartComponent } from './components/chart/chart.component';
import { TimelineComponent, CategorySelectionDialog } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ChartComponent,
    TimelineComponent,
    CategorySelectionDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [CategorySelectionDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
