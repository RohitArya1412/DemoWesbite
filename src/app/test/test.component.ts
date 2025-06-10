import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  emailVerificationForm!:FormGroup;
  emailVerifyArray:any=[]
  highcharts = Highcharts;
  chartOptions:any={}
  constructor(private formBuilder:FormBuilder){
    var aa='QW5raXQgc3VkaGFyIGphIA=='
    var bb='ZmlyIHNlIGFneWUgLi4gc3JtIGtybyBzcm0g'
    var decode=window.atob(bb)
    console.log(decode,"This is decode")
     this.chartOptions = {   
       chart: {
          type: 'column'
       },
       title: {
          text: 'Monthly Average Rainfall'
       },
       subtitle:{
          text: 'Source: WorldClimate.com' 
       },
       xAxis:{
          categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',
          'Aug','Sep','Oct','Nov','Dec'],
          crosshair: true        
       },     
       yAxis : {
          min: 0,
          title: {
             text: 'Rainfall (mm)'         
          }      
       },
       tooltip : {
          headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
             '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
       },
       plotOptions : {
          column: {
             pointPadding: 0.2,
             borderWidth: 0
          }
       },
       series: [{
          name: 'Tokyo',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
             148.5, 216.4, 194.1, 95.6, 54.4]
       }, 
       {
          name: 'New York',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
             91.2, 83.5, 106.6, 92.3]
       }, 
       {
          name: 'London',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
             52.4, 65.2, 59.3, 51.2]
       }, 
       {
          name: 'Berlin',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
             47.6, 39.1, 46.8, 51.1]
       }]
    };
  }

  ngOnInit(){
    console.log(atob('UGF5YWwgZWsgcHVjaGhpaSBkZW5h'),"SDFDGFGD")
    this.emailVerificationForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      isChecked:['',Validators.required],
    })
  }
  get formError(){
    return this.emailVerificationForm.controls;
  }

  submit(){
    // this.emailVerifyArray=[]
    if(this.emailVerificationForm.valid){
      this.emailVerifyArray.push(this.emailVerificationForm.value)
      console.log(this.emailVerifyArray,"sss");
      // alert("Email Verified Successfully")
      this.emailVerificationForm.reset()
  }
  else{
    this.emailVerificationForm.markAllAsTouched()
  }
  }
preview:any=''
currentFile:any;
  selectFile(event:any){
    
    var file = event.target.files
    const ile: File | null = file.item(0);
    this.currentFile=ile;
    const filerReader=new FileReader()
    filerReader.onload=(e:any)=>{
      this.preview=e.target.result
      // console.log(e.target.result,"this is the result")
    }
    filerReader.readAsDataURL(this.currentFile)
  }

}
