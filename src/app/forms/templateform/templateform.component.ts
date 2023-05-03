import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  constructor(private route:Router){}
  arr: any[] = []
  show: boolean = false
  name1: any;
  complain1: any;
  bindex: any;
  arrVal: any;
  showBtn: boolean = false;
  model = {
    name: '',
    complain: ''
  }
  showBtn1: boolean = true;
  resetform: any
  // saveForm(e: any) {
  //   this.arr.push(e.value)
  //   this.arr.filter((val: any) => {
  //     console.log(val);
  //   })
  // }
  save(contact: NgForm) {
    this.arr.push(contact.value)
    console.log(this.arr);
    this.show = true;
    contact.form.reset()
  }
  delFun(v: any) {
    console.log(v.target.value);
    this.arr.filter((val: any, index: any) => {

      if (index == v.target.value) {
        this.arr.splice(index, 1);
      }
    })
    if (this.arr.length == 0) {
      this.show = false
    }
  }
  editFun(a: any) {
    console.log(a.target.value);
    this.arr.filter((vl: any, index: any) => {
      this.showBtn = true
      this.showBtn1 = false;
      if (index == a.target.value) {
        this.bindex = index
        this.model.name = vl.name;
        this.model.complain = vl.complain;
      }
    })
  }
  update(b: any) {
    console.log(b.target.value);
    this.arr[b.target.value] = this.model;
    this.model = {
      name: '',
      complain: ''
    }

    this.showBtn = false;
    this.showBtn1 = true;
  }
  back(){
    this.route.navigate(['forms'])
  }
}
