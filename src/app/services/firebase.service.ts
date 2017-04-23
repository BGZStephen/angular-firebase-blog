import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/Rx"

@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) {
  }

}
