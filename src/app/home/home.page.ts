import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    name: 'saadFarooq',
    city: 'Islamabad',
    interests: ['Swimming','Reading' ,'cricket']
  };
  constructor() {}

}
