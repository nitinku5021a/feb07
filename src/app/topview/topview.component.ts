import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from './../data';

@Component({
  selector: 'app-topview',
  templateUrl: './topview.component.html',
  styleUrls: ['./topview.component.css']
})



export class TopviewComponent implements OnInit {

@Output() outputdata = new EventEmitter<any>();

interest = 9;
inflation = 8;
capital = 12500000;
expense = 30000;
sendData : Data;

constructor() {

}
 
ngOnInit() {
this.sendData = new Data(this.interest/100, this.inflation/100, this.capital, this.expense);
  this.outputdata.emit(this.sendData);
}


onClick(){
  this.sendData = new Data(this.interest/100, this.inflation/100, this.capital, this.expense);
  this.outputdata.emit(this.sendData);

}

}



