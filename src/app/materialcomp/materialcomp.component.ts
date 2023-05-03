import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MookService } from '../mookapi/mook.service';


@Component({
  selector: 'app-materialcomp',
  templateUrl: './materialcomp.component.html',
  styleUrls: ['./materialcomp.component.css'],
  providers: [MookService]
})
export class MaterialcompComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  val: any;
  totalLength: any



  studentData: any;
  dataSource = new MatTableDataSource<any>;
  constructor(private data: MookService) { }

  //get data
  ngOnInit(): void {
    this.data.getPosts().subscribe((post) => {
      this.studentData = post;
      this.totalLength = this.studentData.length
      this.dataSource = new MatTableDataSource<any>(this.studentData);
      console.log(post);
      this.dataSource.paginator = this.paginator;
    })
  }
  //filter
  applyFilter(filterValue: any) {
    this.val = filterValue.target.value;
    console.log(this.val);
    this.dataSource.filter = this.val.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //sort
  sortData(sort: Sort) {
    
    if (!sort.active || sort.direction === '') {
      this.studentData;
      return;
    }

    this.studentData.sort((a:any, b:any) => {
      console.log(a);
      
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'gender':
          return compare(a.gender, b.gender, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

