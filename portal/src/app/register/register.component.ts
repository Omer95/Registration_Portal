import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delegation } from '../shared/delegation';
import { Delegate } from '../shared/delegate';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

/* delegationForm - FormGroup is the form modal which is going to host the reactive form 

delegation  - corrosponding data model which later can be fetched from the server

*/
    delegationForm: FormGroup;
    delegation: Delegation;
    delegationButton = false;
    
    

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

   createForm(){
        // to create a form use fb we used formbuilder in constructior
        this.delegationForm = this.fb.group({
            delegationID: '',
            delegationUniversity: '',
            numberOfDelegates: 1,
            countryAssigned: '',
            delegationStatus: '',
            paymentVerified: false,
        //    delegate: Delegate[]; <--- This needs to be dealth with
        });
       
   }

    onCreateDelegates(){
        var delegationFormIncomplete = this.delegationForm.value;
        var delegationNumberOfDelegates = this.delegationForm.value.numberOfDelegates;
        console.log(delegationFormIncomplete);
        console.log(delegationNumberOfDelegates);
        this.delegationButton=true;
        
    }
    
    
    createDelegateForm(){
        
        
    }
    
    onSubmit(){
        // javascript object mapping 
        // easier because the structure is both same.
        // if different, we need to map it different experiltlu map it
        //this.feedback = this.feedbackForm.value;
    //    console.log(this.feedback);
     //   this.feedbackForm.reset();


    }

}

