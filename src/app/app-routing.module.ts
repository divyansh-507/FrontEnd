import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {path : '', component : AppComponent},
  {path: 'footer', component : FooterComponent},
  {path: 'toolbar', component : ToolbarComponent},
  {path: 'user-login', component : UserLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
