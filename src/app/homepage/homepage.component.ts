import { Component, inject } from '@angular/core'

import { Router } from '@angular/router';
import { DataService } from '../store/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SortPipe } from '../sortpipe/sort.pipe';
import { DescPipe } from '../sortpipe/desc.pipe';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataService, DescPipe]
})
export class HomepageComponent {
  course: any;
  dt: any
  nameSearch: any = ''
  sortData: any;
  descData: any;
  date: any = new Date()
  title = "Angular pipes Example"
  fahrenheit: number | undefined;
  celcius: unknown;

  constructor( private routes: Router, private val: DataService, private sort: SortPipe, private desc: DescPipe) {
   
    this.dt = this.val.setdata();
  }
  empclick(val: any) {
    console.log(val.id);
    this.routes.navigate(['/showdata'], { queryParams: { ...val }, skipLocationChange: true });
  }
  add = new FormGroup({
    data: new FormControl('', [Validators.required]),
  })
  contact = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })
  saveData() {
    console.log(this.contact.value);
    this.course.push(this.contact.value)
    this.contact.reset();

  }

  addData() {
    this.dt.push(this.add.value);
    console.log(this.dt);
  }
  delData(vl: any) {
    this.dt.filter((val: any, index: any) => {
      if (index == vl.target.value) {
        this.dt.splice(index, 1);
      }
    })
  }
  sortName() {
    this.sortData = this.sort.transform(this.course);

  }
  descName() {
    this.descData = this.desc.transform(this.course);
    console.log("sjdfbj");

  }

}
