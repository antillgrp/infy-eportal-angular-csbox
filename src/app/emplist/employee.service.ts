import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

import { Employee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  empSUrl = "/api/getallEmployee";
  empUrl = "/api/employee";
  addEmpUrl = "/api/addEmployee";
  constructor(private http: HttpClient) {}

  getEmpList(): Observable<Employee[]> {
    let t = this.http.get<Employee[]>(this.empSUrl);
    console.log(t);
    return t;
  }

  getEmpDetail(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.empUrl + "/" + id);
  }

  addEmployee(empObj: Employee): Observable<any> {
    return this.http.post(this.addEmpUrl, empObj).pipe(
      catchError((error) => {
        // console.log(
        //   `EmployeeService.addEmployee:
        //   ${JSON.stringify(error)}`
        // );
        return throwError(error);
      })
    );
  }
}
