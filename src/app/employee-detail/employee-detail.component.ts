import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  id: any;
  name: any;
  email: any;
  img: any;

  constructor(private activeRoute: ActivatedRoute,private route:Router) {
     this.activeRoute.queryParamMap.subscribe(param=>{     
      this.id=param.get('id');
      this.name=param.get('name');
      this.email=param.get('email');
      this.img=param.get('img');
      console.log('skjdfhsjdhbj',param);
      
    });
    // this.name = this.activeRoute.snapshot.queryParamMap.get('name');
    // this.email = this.activeRoute.snapshot.queryParamMap.get('email');
    // this.img = this.activeRoute.snapshot.queryParamMap.get('img');
  }
  back() {
    this.route.navigate(['/empolyee'])
  }


}
