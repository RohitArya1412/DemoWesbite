import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  fontFamily = [`'Times New Roman', Times, serif`, `Arial, Helvetica, sans-serif`, `'Courier New', Courier, monospace`, `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`]
  colors = ["red", "green", "blue", "pink"]

  obj: any = {
    text: "",
    fontSize: 3,
    fontFam: "",
    color: ""
  }
  cars = ["BMW", "Audi", "Nexon", "Tiago"]
  carDetail = [
    { carName: "BMW", fontSize: [17, 29, 38, 40, 50, 60, 70][Math.floor(Math.random() * 7)], fontFamily: this.fontFamily[Math.floor(Math.random() * this.fontFamily.length)], color: this.colors[Math.floor(Math.random() * 4)] }
    , { carName: "Audi", fontSize: [17, 29, 38, 40, 50, 60, 70][Math.floor(Math.random() * 7)], fontFamily: this.fontFamily[Math.floor(Math.random() * this.fontFamily.length)], color: this.colors[Math.floor(Math.random() * 4)] },
    { carName: "Nexon", fontSize: [17, 29, 38, 40, 50, 60, 70][Math.floor(Math.random() * 7)], fontFamily: this.fontFamily[Math.floor(Math.random() * this.fontFamily.length)], color: this.colors[Math.floor(Math.random() * 4)] },
    { carName: "Tiago", fontSize: [17, 29, 38, 40, 50, 60, 70][Math.floor(Math.random() * 7)], fontFamily: this.fontFamily[Math.floor(Math.random() * this.fontFamily.length)], color: this.colors[Math.floor(Math.random() * 4)] }]
  dropDownValue(val: any) {
    this.obj.text = val.target.value

    console.log(this.obj.text.fontFam);


    this.carDetail.filter(e => {
      if (e.carName == this.obj.text) {
        this.obj.fontSize = e.fontSize
        this.obj.fontFam = e.fontFamily
        this.obj.color = e.color
      }
    })

    // this.service.raiseDataEvent(this.obj)
  }
  ngOnInit(): void {


  }

}
