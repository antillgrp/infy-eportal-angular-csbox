import {
  Component, OnInit,
  EventEmitter, Output, ViewChild
} from '@angular/core';
import { 
  FormGroup, FormBuilder, Validators 
} from '@angular/forms';

import { Employee } from '../emplist/employee';
import { EmployeeService } from '../emplist/employee.service';

import { CtrlErrorDisplayComponent } from './ctrlErrorDisplay.component';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  //styleUrls: ['./add-employee.component.css']
  styles: [
    // https://www.tutorialsteacher.com/angularjs/angularjs-validation-css-classes
    'input.ng-pristine {background-color:yellow;}',
    'input.ng-touched.ng-invalid {background-color:red;}',
    'input.ng-touched.ng-valid {background-color:rgb(130, 218, 130);}'
  ]
})
export class AddEmployeeComponent implements OnInit {

  //console1=console;

  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService
  ) { }

  addEmployeeForm: FormGroup;  

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
        //https://www.tektutorialshub.com/angular/cross-field-or-multi-field-validation-angular/
        emailId: [ '11111@cfgv', [ Validators.required, Validators.email ] ],
        empName: [ 'dfdd', [ Validators.required ] ],
        empId: [ '9073', [ Validators.required,Validators.pattern(/^(\d{4,6})$/) ] ],
        empLocation: [ 'dfdff', Validators.required ],
        jobLevel: [ '3', [ Validators.required, Validators.min(3), Validators.max(8) ] ],
        phoneNo: [ '2345678907', [ Validators.required, Validators.pattern(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/) ] ], //http://zparacha.com/phone_number_javascript_regex
        gender: [ 'Female', [ Validators.required ] ],
        yearOfExperience: [ '0',  [ Validators.required, Validators.min(0) ] ],
        noOfProjectsWorked: [ '0', [ Validators.required, Validators.min(0) ] ]
      }
    );
  }

  @ViewChild('closebutton') closebutton;

  closeModal() {
    //https://stackblitz.com/edit/angular-close-bootstrap-modal?file=src%2Fapp%2Fapp.component.ts
    this.closebutton.nativeElement.click();
    this.addEmployeeForm.reset();
    this._ERROR=null;
  }

  @Output() onAddEmpCallBK = new EventEmitter<number>();

  _ERROR:string;

  addEmployee() {
    this.empService
    .addEmployee(this.addEmployeeForm.value)
    .subscribe(
      empId => {
        // console.log(
        //   `AddEmployeeComponent.addEmployee[Employee Added Successfully]: ${JSON.stringify(empId)}`
        // );
        //Pass ID to EmplistComponent to navegate to EmpDetail
        this.onAddEmpCallBK.emit(empId);
        this.closeModal();        
      },
      error => {
        this._ERROR=`Error adding employee: ${error.error}`;
        // alert(this._ERROR);
        // console.log(
        //   `EmplistComponent.addEmpCallBK (Error!!! Adding Employee):\n${error.status}:${error.statusText}:${error.error}`
        // );
        setTimeout(() => {this._ERROR=null},4000)
      }
    );
  }
}
