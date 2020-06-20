import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'broccoli-app';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router){
    this.navLinks = [
      // {
      //   label: 'Grocery List',
      //   link: '/grocerylist',
      //   index: 0
      // },
      {
        label: 'Recipe Library',
        link: '/recipe',
        index: 0
      },
      {
        label: 'Ingredients Library',
        link: '/ingredients',
        index: 1
      }
    ]
  }

  ngOnInit(): void{
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }
}
