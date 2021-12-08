import { Component } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   token:string;
  constructor( private fcm: FCM) {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.token=token;
    });
  }

}
