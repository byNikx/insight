import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { ChartComponent } from './components/chart/chart.component';
import { TimelineComponent, CategorySelectionDialog } from './components/timeline/timeline.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionViewComponent } from './components/transaction/transaction-view/transaction-view.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ChartComponent,
    TimelineComponent,
    CategorySelectionDialog,
    TransactionComponent,
    TransactionViewComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  entryComponents: [CategorySelectionDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  