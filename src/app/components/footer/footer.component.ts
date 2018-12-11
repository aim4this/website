import { Component, OnInit } from '@angular/core';

export interface SocialItem {
  src: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialItems: SocialItem[] = [
    {src: './assets/images/github.png', link: 'https://github.com/aim4this'},
    {src: './assets/images/linkedin.png', link: 'https://www.linkedin.com/in/mathis-hellensberg-15b011a5/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
