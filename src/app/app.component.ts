import { Component, OnInit, OnChanges } from '@angular/core';
import { Data } from './data';
import { Table } from './table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
private chartData: Array<any>;
topviewData : Data;
tableviewData: Table[];

constructor() {
     
}
ngOnInit(){

}

ngOnChanges(){

}
datafromTopview(event:Data){
  //console.log(event);
  this.topviewData = event;
}

datafromTableview(event:Table[]){
// console.log("inside app", event);
 this.tableviewData = event;
}



}

