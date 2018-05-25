import { AuthService } from '../core/auth.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {    FormBuilder,    FormGroup,    Validators} from '@angular/forms';
import { DelegationData, DelegateData } from '../shared/interfaces';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

import { AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
// DB

import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReadService } from '../services/read.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  people: Observable<any> | AngularFireObject<any> | AngularFireList<any>;
  list: boolean = true;
  delegatesArray: DelegateData[];
  element: any;
  constructor(public auth: AuthService, private readService: ReadService) { }
  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
    this.people = this.readService.personRef_object;
    this.readObjectWithValueChanges();
  }
  readObjectWithValueChanges(): void {
    this.people = this.readService.getObjectPeopleValueChanges;

    this.readService.getObjectPeopleValueChanges.subscribe((response: any) => {
      console.log('Object valueChanges', response);
      this.element = response;
      this.delegatesArray = response.delegates;
      console.log('OdelegatesArray',  this.delegatesArray );
    });
  }

}
