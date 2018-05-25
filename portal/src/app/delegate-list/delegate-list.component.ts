/*
The delegate list component is responsible for listing down all the delegates saved and then adding and deleting them. 

*/


import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { DelegateData } from '../shared/interfaces';

/** DB */

import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { CreateService } from '../services/create.service';


@Component({
  selector: 'app-delegate-list',
  templateUrl: './delegate-list.component.html',
  styleUrls: ['./delegate-list.component.css']
})
export class DelegateListComponent implements OnInit {
    
    @Input('delegationForm')
    public delegationForm: FormGroup;

    @Input('delegates')
    public delegates: DelegateData[];    


    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
        // add control adds new object to the delegation object which contains the delegates array
        
        console.log('Initializing delegate list', this.delegates);
        this.delegationForm.addControl('delegates', new FormArray([]));
    }

    addDelegate() {
        const delegate: DelegateData = {
            id: Math.floor(Math.random() * 100),
            delegateId: '',
            headDelegate: '',
            firstName: '',
            lastName: '',
            telNum: '',
            email: '',
            photo: '',
            delegateCountry: '',
            committeePreferenceOne: '',
            committeePreferenceTwo: '',
            committeeAssigned: ''
        };

        this.delegates.push(delegate);
        this.cd.detectChanges();
        return false;
    }

    removeDelegate(idx: number) {
        if (this.delegates.length > 1) {
            this.delegates.splice(idx, 1);
            (<FormArray>this.delegationForm.get('delegates')).removeAt(idx);
        }
        return false;
    }
}