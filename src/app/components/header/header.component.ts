import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string;
  routerLink: string;
}

export interface SocialItem {
  name: string;
  src: string;
  link: string;
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
    {name: 'contact', routerLink: '/contact'}
  ];

  socialItems: SocialItem[] = [
    {name: 'Github', src: './assets/images/github.png', link: 'https://github.com/aim4this'},
    {name: 'LinkedIn', src: './assets/images/linkedin.png', link: 'https://www.linkedin.com/in/mathis-hellensberg-15b011a5/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
