
import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ServiceService } from 'src/app/service/service.service';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }




@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.css'],
  providers: [ServiceService]
})
export class Dropdown1Component implements OnInit {
  // cars = ["BMW", "Audi", "Nexon", "Tiago"]

  color: any;
  bgClr: any;
  showRed!:boolean;
  showBlue!:boolean;
  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      // color:this.color
    };
  };

  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  // treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor(private service: ServiceService) {

  }
  ngOnInit(): void {
      this.service.getAccountData().subscribe((res:any)=>{
        this.dataSource.data = res.Accounts;
      console.log(res.Accounts,"This is the response");
    })
  }

  hasChild = (_: number, node: any) =>node.expandable;
  //child node function
  showValue(val: any, obj: any) {
    console.log(this.treeControl,"This is the tree control");
    
    // obj.color
    if (val == 'Bank') {   
      obj.colors = 'red' 
      this.color=obj
      console.log(this.color);
    }
    else if (val == 'Online Payment') {
      obj.colors = 'blue' 
      this.color=obj
    }
    console.log(obj, "Hello World");
  }


  showValues(){
    console.log('HelloWord');
    
  }


}
