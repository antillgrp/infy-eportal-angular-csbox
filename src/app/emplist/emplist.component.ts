import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  searchFilter: string = "";

  empList: Employee[];

  //error: any;

  constructor(
    private router: Router,
    //private route: ActivatedRoute,
    private empService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmpList();
  }

  getEmpList(): void {
    this.empService
    .getEmpList()
    .subscribe(
      employees => {
        this.empList = employees;  
      }
    );
  }

  viewEmpDetail(employeeID: number): void {
    this.router.navigate(['empDetails/' + employeeID]);
  }
}
