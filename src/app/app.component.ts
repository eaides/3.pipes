import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ernesto';
  nombre2 = 'erNEsto nataLio Aides';
  video_key = 'SLdBjSgVgWM';
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.1234;
  sale = 1234.5;
  objeto = {
    name: 'Ernesto',
    apelido: 'Aides',
    address: {
      street: 'Echad Ha\'am',
      number: '16/26',
      city: 'Ashdod',
      country: 'Israel'
    }
  };
  valueOfPromise = new Promise( (resolve, reject ) => {
    setTimeout( () => resolve('Data Arrived!'), 5000);
  });
  passwordActive = true;
}
