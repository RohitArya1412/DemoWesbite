import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  name: any;
  firstNumber: unknown;
  secondNumber: unknown;
  total: unknown;
  value: unknown;
  myobj: any[] = []



  val: string = "";



  calculatorFunction(val: any) {
    this.value = val.target.value
    console.log(this.value);
    if (this.value == "+") {
      this.total = Number(this.firstNumber) + Number(this.secondNumber)
    }
    else if (this.value == "-") {
      this.total = Number(this.firstNumber) - Number(this.secondNumber)
    }
    else if (this.value == "*") {
      this.total = Number(this.firstNumber) * Number(this.secondNumber)
    }
    else if (this.value == "/") {
      this.total = Number(this.firstNumber) / Number(this.secondNumber)
    }
  }
  

}
