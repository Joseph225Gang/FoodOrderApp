import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuListComponent} from './menu-list/menu-list.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },{
    path: "home",
    component: MenuListComponent,
  },
  {
    path: "menu",
    component: MenuListComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
