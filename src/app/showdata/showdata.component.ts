import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent {
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
    this.route.navigate(['/homePage'])
  }

}
