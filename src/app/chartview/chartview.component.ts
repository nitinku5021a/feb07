import { Component,OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation  } from '@angular/core';
import * as d3 from 'd3';
import { Table } from './../table';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartviewComponent implements OnInit, OnChanges {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Table[];
  private element = this.chartContainer.nativeElement;
  private margin: any = { top: 20, bottom: 20, left: 100, right: 20};
  
  private width: number = this.element.offsetWidth - this.margin.left - this.margin.right;
  private height: number = this.element.offsetHeight - this.margin.top - this.margin.bottom;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  svg = d3.select(this.element).append('svg')
      .attr('width', this.element.offsetWidth)
      .attr('height', this.element.offsetHeight);

  private chart = this.svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

  private test: number =0;

  constructor() { 

    this.xScale = d3.scaleLinear().rangeRound([0, this.width]);
   
    this.yScale = d3.scaleLinear().rangeRound([this.height, 0]);
    
    this.xScale.domain(d3.extent(this.data, function(d){return d.year;}));
    this.yScale.domain(d3.extent(this.data, function(d){return d.capital;}));
    
    // x & y axis
    this.xAxis = this.svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = this.svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
    
  }

  ngOnInit() {
    
    
  }
  

  ngOnChanges() {
   
    if (this.data) {
      //this.createChart();
      console.log(this.data);
     // this.updateChart();
      
    }
  }


  createChart() {
    
    

  }

  updateChart() {
    // update scales & axis
    
      
    this.xScale.domain(d3.extent(this.data, function(d){return d.year;}));
    this.yScale.domain(d3.extent(this.data, function(d){return d.capital;}));
 
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.data);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
  /*
    this.chart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d.year))
      .attr('y', d => this.yScale(d.capital))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d.capital))
      .style('fill', 'black');
*/
    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d.year))
      .attr('y', d => this.yScale(0))
      .attr('width', 2)
      .attr('height', 0)
      .style('fill', 'black')
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d.capital))
      .attr('height', d => this.height - this.yScale(d.capital));
 
}
  
}