import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  data: any
  link: any
  cls: any;
  data2: any;
  data3: any;
  data4: any;
  arr: any[] = [];
  text: any;
  text1: any;
  check: boolean = false





  media(val: any) {
    this.data = val.target.value;

    if (this.data == "facebook") {
      this.link = "https://www.facebook.com/"
      this.cls = "btn btn-info"
      console.log("facebook");

    }
    else if (this.data == "instagram") {
      this.link = "https://www.instagram.com/?hl=en"
      this.cls = "btn btn-danger"
      console.log("instagram");
    }
    else if (this.data == "google") {
      this.link = "https://www.google.com/"
      this.cls = "btn btn-light"
      console.log("Google");
    }
    else if (this.data == "amazon") {
      this.link = "https://www.amazon.in/"
      this.cls = "btn btn-success"
      console.log("Amazon");
    }
    else if (this.data == "flipkart") {
      this.link = "https://www.flipkart.com/"
      this.cls = "btn btn-primary"
      console.log("Flipkart");
    }
  }
  media1(elem: any) {
    if (elem.target.checked == true) {
      if (elem.target.value == "facebook") {
        this.data2 = "Facebook"

      }
      if (elem.target.value == "instagram") {
        this.data3 = "Instagram"

      }
      if (elem.target.value == "google") {
        this.data4 = "Google"

      }
    }
    if (elem.target.checked == false) {
      if (elem.target.value == "facebook") {
        this.data2 = ""

      }
      if (elem.target.value == "instagram") {
        this.data3 = ""

      }
      if (elem.target.value == "google") {
        this.data4 = ""

      }
    }
  }
  show(elem: any) {
    this.text = elem.target.value;
    if (this.text.length >= 6) {
      this.text1 = elem.target.value;
    }
  }

}
