
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DelegateData } from '../shared/interfaces';

/**db */
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { CreateService } from '../services/create.service';


@Component({
  selector: 'app-delegate-form',
  templateUrl: './delegate-form.component.html',
  styleUrls: ['./delegate-form.component.css']
})
export class DelegateFormComponent implements OnInit  {
    
    /*Input the delegates and delegate*/
    
    @Input('delegates')
    public delegates: FormArray;
    @Input('delegate')
    public delegate: DelegateData;

    public delegateForm: FormGroup;    
    


    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        console.log('Initializing delegate form', this.delegate);
        this.delegateForm = this.toFormGroup(this.delegate);
        this.delegates.push(this.delegateForm);
    }

    private toFormGroup(data: DelegateData) {
        const formGroup = this.fb.group({
            id: [ data.id ],            
            delegateId: [ data.delegateId ],
            headDelegate: [ data.headDelegate || '', Validators.required ],
            firstName: [ data.firstName || '', Validators.required ],
            lastName: [ data.lastName ],
            telNum: [ data.telNum ],
            email: [ data.email ],
            photo: [ data.photo ],
            delegateCountry: [ data.delegateCountry ],
            committeePreferenceOne: [ data.committeePreferenceOne ],
            committeePreferenceTwo: [ data.committeePreferenceTwo ],
            committeeAssigned: [ data.committeeAssigned ]
        });

        return formGroup;
    }

}
