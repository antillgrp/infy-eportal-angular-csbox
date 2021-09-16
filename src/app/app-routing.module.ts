import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { EmplistComponent } from "./emplist/emplist.component";
import { EmpdetailComponent } from "./empdetail/empdetail.component";

import { LoggedInGuard } from "./login/logged-in.guard";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "employee",
    component: EmplistComponent
    //canActivate: [ LoggedInGuard ]
  },
  {
    path: "empDetails/:empId",
    component: EmpdetailComponent
    //canActivate: [ LoggedInGuard ]
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "/login"
    //redirectTo: '/welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
