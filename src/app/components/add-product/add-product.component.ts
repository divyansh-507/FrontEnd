import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Inventory } from 'src/app/pojos/Inventory';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  
  form !: FormGroup;
  title !: string;

  name !: string;
  manufacturer !: string;
  price !: number;
  quantity !: number;
  description !: string;

  productObj !: Inventory;
  
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', []],
      name : ['', [Validators.required]],
      manufacturer : ['' , [Validators.required]],
      price : ['',[Validators.required] ],
      quantity : ['', [Validators.required]],
      description : ['', [Validators.required]]
    })
  }

  cancelProduct(){

  }

  addProduct(){}

}
