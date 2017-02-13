import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Data } from './../data';
import { Table } from './../table';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
@Input() topviewData: Data;
@Output() tableData = new EventEmitter<any>();

table: Table[]; 
  constructor() { 

    this.table = [];  

   }

ngOnChanges(){
if(this.topviewData!=null){

  if(this.topviewData.capital!=undefined && this.topviewData.expense!=undefined
   && this.topviewData.interest!=undefined && this.topviewData.inflation!=undefined){
     this.table = this.updateTable(this.topviewData);
     this.tableData.emit(this.table);
   }

}
  
   
}

ngOnInit() {
  
}

updateTable(topviewData: Data):Table[]{
let newTable: Table[] =[];

for(var i=0;i<50;i++){

if(i==0){
newTable[i]=new Table(i+1,topviewData.interest,topviewData.inflation,topviewData.capital,topviewData.expense);
}
else{

newTable[i]=new Table(i+1,topviewData.interest,topviewData.inflation,
this.nextYearCapital(newTable[i-1].interest,newTable[i-1].capital,newTable[i-1].expense),
this.expAfterInflation(newTable[i-1].inflation,newTable[i-1].expense));

}
    
  
}

return newTable;

}

nextYearCapital(interest:number, capital:number, expense:number):number{
 
  return (capital-(expense))*(1+interest);
}
expAfterInflation(inflation:number, prevExpense:number):number{
  return prevExpense*(1+inflation);
}

}

