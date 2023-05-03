import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './books/menu.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers:[MenuService]
})
export class StoreComponent {
  name: any;
  menu: any = [];
  breadcrumbList: any = [];

  constructor(private _router: Router, private menuService: MenuService) { }

  ngOnInit() {

    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }


  listenRouting() {
    let routerUrl: string, routerList:any, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {

        target = this.menu;
        this.breadcrumbList.length = 0;

        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router:any, index:any) => {

          target = target.find((page:any)  => page.path.slice(2) === router);

          this.breadcrumbList.push({
            name: target.name,

            path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
          });


          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbList);
      }
    });
  }
  back(v:any){
    console.log(v);
    this._router.navigate(v)
    

  }
}
