import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../emplist/employee.service';
import { Employee } from '../emplist/employee';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  empDetail: Employee;
  empId: string;
  error: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(
      params => {
        console.log(params);
        this.empId = params['empId'];
      }
    );
  }

  ngOnInit(): void {
    this.employeeService
    .getEmpDetail(this.empId)
    .subscribe(
      employee => this.empDetail = employee
    );
  }
}
