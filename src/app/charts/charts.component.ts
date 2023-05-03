import { Component, OnInit, DoCheck } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { MookService } from '../mookapi/mook.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  editVal: any;
  constructor(private data: MookService) { }
  dataVal: any = []
  page: number = 1;
  pageItem: number = 5;
  labelVal: any[] = []
  realVal: any[] = []
  colorlVal: any[] = []
  userData: any;
  searchData: any
  savebtn: boolean = true;
  updateBtn: boolean = false;
  clr: any;
  result: any = []
  //Form Structure
  addData: any = new FormGroup({
    year: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    colorcode: new FormControl('', [Validators.required])
  });
  //save Data
  saveData() {
    this.userData = this.addData.value;
    this.addData.reset();
    this.data.setChart(this.userData).subscribe((post: any) => {
      this.dataVal.push(post);
      this.newFunction()
      console.log(this.dataVal);
    })
  }
  //Edit Data
  editData(id: any) {
    this.updateBtn = true;
    this.savebtn = false;
    this.dataVal.filter((val: any) => {
      if (val.id == id.id) {
        this.editVal = val.id;
        this.addData.setValue({
          year: val.year,
          colorcode: val.colorcode,
          amount: val.amount
        })
      }
    })
    // this.labelVal=[]
    // console.log(this.labelVal);


  }
  //update Data
  updateData(val: any) {
    this.savebtn = true;
    this.updateBtn = false;
    console.log(val.target.value);
    this.data.putCharts(val.target.value, this.addData.value).subscribe((post: any) => {
      this.addData.reset();
      this.newFunction();
      this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'bar', 'barChart');


    })
  }
  //Delete Data
  deleteData(id: any) {
    console.log(id);
    this.data.deleteChart(id).subscribe(post => {
      console.log(post);
    })
  }
  //chart loaded
  ngOnInit(): any {
    this.newFunction()
    console.log(this.labelVal);
    console.log(this.realVal);
    console.log(this.colorlVal);
    this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'bar', 'barChart');

  }
  newFunction() {
    this.labelVal = [];
    this.realVal = [];
    this.colorlVal = [];
    console.log("THis fuction is called here");
    this.data.getChart().subscribe((post) => {
      this.dataVal = post;
      if (this.dataVal != null) {
        this.dataVal.filter((val: any) => {
          this.labelVal.push(val.year);
          this.realVal.push(val.amount);
          this.colorlVal.push(val.colorcode);
        });
      }
      // this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'bar', 'barChart');
      // this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'pie', 'pieChart');
      // this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'line', 'lineChart');
      // this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'polarArea', 'polarChart');
      // this.renderChart(this.labelVal, this.realVal, this.colorlVal, 'scatter', 'scatterChart');

    });
  }
  // Chart
  renderChart(labelVal: any, realVal: any, colorlVal: any, type: any, id: any) {
    
    var myChart =Chart.getChart('barChart')
    myChart?.destroy();


    let RandomChart= new Chart('barChart', {
      type: type,
      data: {
        labels: labelVal,
        datasets: [{
          label: 'Sale',
          data: realVal,
          borderWidth: 1,
          backgroundColor: colorlVal,
          borderColor: [colorlVal],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  //Change Page item 
  chngePge(val: any) {
    this.pageItem = val.target.value;
  }
}

