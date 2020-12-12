import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice10';

  json = {
    name: 'Yernur',
    surname: 'Ybrayev',
    gender: 'Male',
    university: 'Satbayev University'
  };

}
