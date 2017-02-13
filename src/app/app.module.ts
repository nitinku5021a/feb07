import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TopviewComponent } from './topview/topview.component';
import { ChartviewComponent } from './chartview/chartview.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    TopviewComponent,
    ChartviewComponent
  ],
  imports: [
    BrowserModule,
    [MaterialModule.forRoot()],
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
