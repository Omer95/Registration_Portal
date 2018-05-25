import { AfterViewInit, Component, OnInit } from '@angular/core';
import {    FormBuilder,    FormGroup,    Validators} from '@angular/forms';
import { DelegationData } from '../shared/interfaces';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

// DB

import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-delegation-form',
  templateUrl: './delegation-form.component.html',
  styleUrls: ['./delegation-form.component.css']
})
export class DelegationFormComponent implements OnInit, AfterViewInit  {
    
    /*
    
    delegationData is the Data Model
    delegationForm is the Form Modal
    */

    /**
     *   firebaseCreateForm: FormGroup;
        list: boolean = true;
     * 
    */
    
    public initialState: DelegationData;
    public delegationData: DelegationData;
    public delegationForm: FormGroup;


  constructor(private fb: FormBuilder, private createService: CreateService) { }

  ngOnInit() {
      
      /*
      Whend Database conntected the getDelegation data should retrive the data from the database
      
      */

      /*
        delegationForm is formgroup
        firebaseCreateForm is formgrouip
      */
        this.initialState = this.getDelegationData();
        this.delegationData = _.cloneDeep(this.initialState);
        this.delegationForm = this.toFormGroup(this.delegationData);
        console.log('Initial delegationData', this.delegationData);
      
  }

    ngAfterViewInit() {
            this.delegationForm.valueChanges
                .subscribe(value => {
                    console.log('Delegation Form changed', value);
                    this.delegationData = _.mergeWith(this.delegationData,
                                                  value,
                                                  this.mergeCustomizer);

                });
        }

        createObjectWithSet(): void {

          /*  const updatedDelegationData = _.mergeWith(this.delegationData,
                this.delegationForm.value,
                this.mergeCustomizer); */

            const formValue = this.delegationForm.value;
            this.createService.createObjectWithSet = formValue;
          }
        private getDelegationData(): DelegationData {
            
            return {
                delegationID: 'MUNIK - 001 ',
                delegationUniversity: '',
                numberOfDelegates: '',
                countryAssigned: '',
                delegationStatus: '',
                paymentVerified: '',
              delegates: [{
                    id: 1,
                    delegateId: 'MUNIK - 001 - 01',
                    headDelegate: '',
                    firstName: '',
                    lastName: ' ',
                    telNum: '',
                    email: '',
                    photo: '',
                    delegateCountry: ']',
                    committeePreferenceOne: '',
                    committeePreferenceTwo: '',
                    committeeAssigned: ''
                }]
             };
        } 

        /*
    
    delegationData is the Data Model
    delegationForm is the Form Modal
    */
    /*
    toFormGroup simply takes in the inital data model which has the saved values and converts it into a form modal 
    
    later
    */
        private toFormGroup(data: DelegationData): FormGroup {
            const formGroup = this.fb.group({
                delegationID:  [ data.delegationID ],
                delegationUniversity: [ data.delegationUniversity ],
                numberOfDelegates: [ data.numberOfDelegates ],
                countryAssigned:[ data.countryAssigned  ],
                delegationStatus: [ data.delegationStatus ],
                paymentVerified: [ data.paymentVerified ]
            });

            return formGroup;
        }

        // _.mergeWith customizer to avoid merging primitive arrays, and only
        // merge object arrays
        private mergeCustomizer = (objValue, srcValue) => {
            if (_.isArray(objValue)) {
                if (_.isPlainObject(objValue[0]) || _.isPlainObject(srcValue[0])) {
                    return srcValue.map(src => {
                        const obj = _.find(objValue, { id: src.id });
                        return _.mergeWith(obj || {}, src, this.mergeCustomizer);
                    });
                }
                return srcValue;
            }
        }

/*
Over here in OnSubmit the database shall be linked/updated

*/        
        
        onSubmit() {
            if (!this.delegationForm.valid) {
                console.error('Delegation Form invalid, preventing submission');
                return false;
            }

            const updatedDelegationData = _.mergeWith(this.delegationData,
                                                  this.delegationForm.value,
                                                  this.mergeCustomizer);

            console.log('Submitting...');
            console.log('Original delegationData', this.initialState);
            console.log('Updated delegationData', updatedDelegationData);

            return false;
        }

    }

 