import {Injectable} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  urlBase = 'http://checkin-api.dev.cap-liberte.com'

  static get parameters() {
      return [[Http]];
  }

  constructor(private http:Http) {
  }

  getAllCheckin() {
      var response = this.http.get(this.urlBase+'/checkin').map(res => res.json());
      return response;
  }
}
