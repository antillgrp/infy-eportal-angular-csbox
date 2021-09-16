import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CtrlErrorDisplayComponent } from './add-employee/ctrlErrorDisplay.component';

import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    LoginComponent,
    EmpdetailComponent,
    EmplistComponent,
    FilterPipe,
    AddEmployeeComponent,
    CtrlErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
