import { Component } from '@angular/core';
import { FortuneWallComponent } from './fortune-wall/fortune-wall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FortuneWallComponent],
  template: `
    <app-fortune-wall></app-fortune-wall>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class App {
  title = 'cosmic-fortune-teller';
}