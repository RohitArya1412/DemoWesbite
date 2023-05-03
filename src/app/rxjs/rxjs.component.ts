import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, from, filter, map, tap } from 'rxjs';
import { distinct, first, take } from 'rxjs/operators';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  constructor(private data1: ServiceService) {
    this.data1.rxjs.next(true);
  }
  arr: any = []
  username: string = "John";

  laptopSales: any = [
    {
      "id": 1,
      "name": "Samsung",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 40000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 2,
      "name": "Asus",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 37000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 3,
      "name": "Acer",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 55000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 4,
      "name": "Lenvo",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 60000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 5,
      "name": "Samsung",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 34000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 6,
      "name": "Acer",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 80000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 7,
      "name": "Asus",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 30000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 8,
      "name": "Lenvo",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 34000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 9,
      "name": "Asus",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 53000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 10,
      "name": "Samsung",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 29000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 11,
      "name": "Lenvo",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 31000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 12,
      "name": "Acer",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 70000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 13,
      "name": "Samsung",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 45000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 14,
      "name": "Asus",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 35000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 15,
      "name": "Lenvo",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 30000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 16,
      "name": "Samsung",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 32000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 17,
      "name": "Lenvo",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 24000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 18,
      "name": "Asus",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 23400,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 19,
      "name": "Acer",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 25600,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 20,
      "name": "Lenvo",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 27600,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 21,
      "name": "Samsung",
      "img": "https://b1938632.smushcdn.com/1938632/app/uploads/2021/01/lapsrazer-560x600.jpg?lossy=0&strip=1&webp=1",
      "price": 50000,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 22,
      "name": "Asus",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxJgqYCV2q27bZaqj_fRC__is80GUaxQpsJQ7vZgcdNzoIT5MhQthb7KElqg6gdTTvPbXls6uer8&usqp=CAU&ec=48665698",
      "price": 32100,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 23,
      "name": "Acer",
      "img": "https://c4.wallpaperflare.com/wallpaper/455/346/398/macro-blur-keyboard-laptop-wallpaper-preview.jpg",
      "price": 65420,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
      "id": 24,
      "name": "Lenvo",
      "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
      "price": 85210,
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    }
  ]

  obs = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.complete()
  }).pipe(
    tap(data => console.log('tap ' + data)),           //tap
    filter((data: any) => data > 2),                        //filter
    tap(data => console.log('filter ' + data)),        //tap
    map((val) => { return val as number * 2 }),      //map
    tap(data => console.log('final ' + data)),         //tap
  )

  data: any = [];

  ngOnInit(): void {
    // of ==>The Of creates the observable from the arguments that you pass into it. You can pass any number of arguments to the Of. Each argument emitted separately and one after the other. It sends the Complete signal in the end.
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr1 = ['a', 'b', 'c', 'd'];

    this.data1.userName.subscribe((res: string) => {
      this.username = res;
    })

    const obs1 = of(arr, arr1, 1, 2, 3, 4, 5);
    obs1.subscribe((val: any) => console.log(val),
    )

    //form ==> the from operator takes the only one argument that can be iterated and convert it into a obervable ;
    console.log('from operator');

    const obs2 = from([12, 24, 32, 1, 2, 5, 4, 3, 4, 5]);
    obs2.subscribe((val: any) => console.log(val),
    )

    //pipes ==> the pipe method os the angular observable are used to chain the multiple operator together, we can use the pipes as the standlone method which helps us to resuse the multiple places and the operator are seprated by the comma.
    // map==> operator applies a given project function to each value emitted by the source Observable and emits the resulting values as an Observable.
    //filter ==> operator filter items from the source observable based on some condition and returns the filtered value as a new observable

    this.obs.subscribe(
      (val: any) => {
        this.data.push(val)
        console.log(this.data)
      }
    )
    const obs3 = from(this.laptopSales).pipe(distinct((e: any) => e.name));
    obs3.subscribe((val: any) => {
      this.arr.push(val)

    })
  }
  ngOnDestroy(): void {
    this.data1.rxjs.next(false);
  }


}
