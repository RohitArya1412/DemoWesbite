import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  clr: unknown;
  check: boolean = true
  modelVal: any;
  val: any;
  md: any;
  img: unknown;
  about: unknown;
  show: boolean = false
  show2: boolean = false
  details: unknown;
  dCheck: boolean = false;
  btnName: boolean = false;


  cars = [{ name: "Tata", image: "https://tse1.mm.bing.net/th?id=OIP.7mcSWrW1u2S5KadmYOpngQHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114", model: "Tigore", about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!" },
  { name: "Kia", image: "https://tse1.mm.bing.net/th?id=OIP.1RKSfc04O_rOdxXUwf9AFQHaD5&pid=Api&rs=1&c=1&qlt=95&w=229&h=120", model: "Sonet", about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!" },
  { name: "Maruti", image: "https://tse3.mm.bing.net/th?id=OIP.JCOoYK81JkN21tzDjohQFgHaEK&pid=Api&P=0", model: "breeza", about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!" },
  { name: "Toyota", image: "https://tse1.mm.bing.net/th?id=OIP.yWXRNm2TtG1lG-qqOEdPhgHaE6&pid=Api&rs=1&c=1&qlt=95&w=150&h=99", model: "Fortuner", about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!", detail: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nobis eos sunt dolorem omnis nostrum. Dolores laudantium officia quam tempora fugit ullam molestias!" }]

  // user: string[] = ["John", "Marry", "Sam", "Petter"]
  // students = [{ name: "Mathew", email: 'Mathew@gmail.com', location: "Noida" },
  // { name: "John", email: 'John@gmail.com', location: "Delhi" },
  // { name: "Marry", email: 'Marry@gmail.com', location: "Mumbai" },
  // { name: "John", email: 'Sam@gmail.com', location: "Pune" },
  // { name: "John", email: 'Petter@gmail.com', location: "New Delhi" }
  // ]
  payment = [
    { name: "Bank", method: ["SBI", "BOI", "HDFC"] },
    { name: "Online Payment", method: ["Paytm", "Phone Pay", "Google Pay"] },
    { name: "Other", method: ["Debit Card", "Credit Card"] },
  ]
  paymentMethod: any;
  btnClick() {
    this.clr = "red"

  }
  checkfun() {
    this.check = !this.check

  }

  chngeFun(val: any) {


    // console.log(val.target.value);
    this.cars.filter((vl: any) => {
      if (val.target.value == vl.name) {
        this.md = vl.model;
        this.img = vl.image;
        this.about = vl.about;
        this.show = true;
        this.details = vl.detail;

      }
    })
  }
  detailFun(d: any) {

    this.dCheck = !this.dCheck;
    this.btnName = !this.btnName

  }
  bankName(bName: any) {
    console.log(bName.target.value);
    this.payment.filter((vl: any) => {
      if (bName.target.value == vl.name) {
        this.paymentMethod = vl.method;
        this.show2 = true

      }
    })


  }
  pName(pname: any) {
    console.log(pname.target.value, "payment name");

  }

}
