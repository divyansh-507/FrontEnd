import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {path : '', component : AddProductComponent},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'admin-dashboard', component: AdminDashboardComponent},
  {path : 'inventory', component : InventoryComponent},
  {path : 'admin-layout', component : AdminLayoutComponent},
  {path : 'employee-dashboard', component : EmployeeDashboardComponent},
  {path : 'employee-cards', component : EmployeeCardsComponent},
  {path : 'add-product', component : AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
