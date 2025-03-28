import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html'  ,
  styleUrl: `./app.component.css`
})
export class AppComponent {
  monster1!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Elekbich2";
    this.monster1.hp = 60;
    this.monster1.figureCaption = "N#001";
  }
}