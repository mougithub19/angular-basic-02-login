import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addme',
  templateUrl: './addme.component.html',
  styleUrls: ['./addme.component.css']
})
export class AddmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}