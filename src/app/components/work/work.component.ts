import { Component, OnInit } from '@angular/core';

export interface WorkItem {
  title: string;
  image: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  workItems: WorkItem[] = [
    {title: 'Test Workitem', image: './assets/images/background.jpg', date: '01/01/2018', description: 'This is just a test project to see how it looks.'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
