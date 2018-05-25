import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';

@Injectable()
export class CreateService {

  personRef_object: AngularFireObject<any>;


  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.personRef_object = this.db.object(`delegations/${this.auth.currentUserId}`);
   }

   set createObjectWithSet(person: any) {
    this.personRef_object.set(person);
  }


}
