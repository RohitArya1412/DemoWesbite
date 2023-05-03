import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [      
      { 
        name: 'stores', 
        path: './stores', 
        children: [
          {
            name: 'books',
            path: './books',
            children: [
              { 
                name: 'Book1',
                path: './book1'
              },
              { 
                name: 'Book2',
                path: './book2'
              },
              { 
                name: 'Book3',
                path: './book3'
              },
              { 
                name: 'Book4',
                path: './book4'
              }              
            ]
          }
        ] 
      },
    ];

    return menu;
  }

}