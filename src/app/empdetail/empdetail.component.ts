import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent {
  empId: any;

  constructor(private route: ActivatedRoute) {
    this.empId = this.route.snapshot.paramMap.get('id');
  }
}