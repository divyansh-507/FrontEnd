import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path : '', component : AdminDashboardComponent},
  {path : 'home', component : HomeComponent},
  {path : 'footer', component : FooterComponent},
  {path : 'toolbar', component : ToolbarComponent},
  {path : 'user-login', component : UserLoginComponent},
  {path : 'admin-dashoboard', component: AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
