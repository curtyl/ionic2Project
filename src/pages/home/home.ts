import { Component} from '@angular/core';

import { NavController} from 'ionic-angular';

import { UserService} from '../UserService/UserService'
import { Checkin} from '../checkin/checkin'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Checkin]
})

export class HomePage {

  checkins: Checkin[];
  checkinSelected : Checkin;

  constructor(public navCtrl: NavController, private userService: UserService){
      this.userService.getAllCheckin().subscribe(
        data => {
          this.checkins = data;
        },
        err => {
          console.log(err);
        },
        () => console.log("checkin complete"));
      }


  onSelect(checkin: Checkin): void {
    this.checkinSelected = checkin;
    }

}
