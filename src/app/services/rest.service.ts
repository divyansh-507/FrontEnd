import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cashier } from '../pojos/Cashier';
import { Customer } from '../pojos/Customer';
import { Inventory } from '../pojos/Inventory';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  strUrl : string = "http://localhost:8080/api"  // url where the backend server is running ,  

  //get inventory
  getInventory():Observable<any>{
    return this.http.get(this.strUrl + '/getInventory');
  }

  //get product by product-id
  getInventoryById(id: number): Observable<any> {
    return this.http.get(this.strUrl + '/getInventory/' + id);
  }


  // add a new product 
  addProduct(invObj: Inventory): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(invObj);
    console.log(body);
    return this.http.post(this.strUrl + '/addProduct', body, { 'headers': headers });
  }

  // update inventory
  updateInventory(invObj: Inventory): Observable<any> {
    let editUrl = this.strUrl + "/updateInventory";
    return this.http.put(editUrl, invObj);
  }

  // delete a product
  removeProduct(id: number): Observable<any>{
    return this.http.delete(this.strUrl + '/removeProduct' + id);
  }

  //get Employees
  getEmployee():Observable<any>{
    return this.http.get(this.strUrl + '/getEmployee');
  }

  //get employee by emp-id
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.strUrl + '/getEmployee/' + id);
  }


  // create a new employee 
  addEmployee(cahier: Cashier): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(cahier);
    console.log(body);
    return this.http.post(this.strUrl + '/addEmployee', body, { 'headers': headers });
  }

  // update employee details
  updateEmployee(cahier: Cashier): Observable<any> {
    let editUrl = this.strUrl + "/updateEmployee";
    return this.http.put(editUrl, cahier);
  }

  //delete an employee
  deleteEmployeee(id: number): Observable<any> {
    let deleteUrl = this.strUrl + '/removeEmployee/' + id;
    return this.http.delete(deleteUrl);
  }

  //get all Customers
  getCustomer():Observable<any>{
    return this.http.get(this.strUrl + '/getCustomer');
  }

  // create a customer
  addCustomer(customer: Customer):Observable<any>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(customer);
    console.log(body);
    return this.http.post(this.strUrl + '/addCustomer', body, { 'headers': headers });
  }

  //get all Transactions
  getTransaction():Observable<any>{
    return this.http.get(this.strUrl + '/getTransaction');
  }

  //login
  // login(loginObj: any): Observable<any> {
  //   const headers = { 'content-type': 'application/json' };

  //   const body = JSON.stringify(loginObj)
  //   return this.http.post(this.strUrl + '/login', body, { 'headers': headers, 'responseType': 'text' })
  // }
}
