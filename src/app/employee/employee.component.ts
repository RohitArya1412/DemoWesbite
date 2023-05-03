import { Component } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empDetail:any


 
  // constructor(private router: Router, private data: ServiceService) {
  //   this.empDetail=this.data.data();

  //  }
  // empclick(val: any) {
  //   console.log(val.id);
  //   this.router.navigate(['/empolyeeDet'], { queryParams: {...val} });
  // }

}
