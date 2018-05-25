import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';
@Injectable()
export class ReadService {

  personRef_object: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase, private auth: AuthService) {

    this.personRef_object = this.db.object(`delegations/${this.auth.currentUserId}`);
   }
  // OBJECT
  get getObjectPeopleValueChanges(): Observable<{any}> {
    return this.personRef_object.valueChanges();
  }

}
