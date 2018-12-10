import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {name: 'home', routerLink: '/home'},
    {name: 'work', routerLink: '/work'},
    {name: 'about', routerLink: '/about'},
    {name: 'contact', routerLink: '/contact'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
