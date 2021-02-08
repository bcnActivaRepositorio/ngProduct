import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'pr-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  // binding
textSmall: string = 'Field must NOT be';
textSpan: string = 'empty';
title: string = 'create product';
id: string | null;

// class definition
productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productService: ProductService,
              private myRoute: ActivatedRoute) {
    // same as class js
    this.productForm = this.fb.group({
      product:  ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price:    ['', Validators.required]
    });

    this.id = this.myRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.toEdit();
  }
  createProduct(){

    // new object
    const PRODUCT: Producto = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value,
    }
    console.log(PRODUCT);

    // checking the id
    if(this.id !== null){
      // edit product

      this._productService.editProduct(this.id, PRODUCT).subscribe(data => {
          // message
       this.toastr.info('Product has been successfully updated', 'Updated product');
       this.router.navigate(['/']);
      }, error => {
        console.log('Error, product not updated!');
        // msg
        this.toastr.error(`We weren't able to update your item`, 'Error updating the product');
        this.productForm.reset();
      })
    } else {
         // add to list
    this._productService.createProducts(PRODUCT).subscribe(data => {
      // message
   this.toastr.success('Product has been successfully registered', 'Registered product');
   this.router.navigate(['/']);
   console.log('Product has been successfully registeredsg');
   }, error => {
     console.log('Error, product not add it to your chart');
     // msg
     this.toastr.error(`We weren't able to add your item`, 'Error buying the product');
     this.productForm.reset();
   });

    }


  }
 // edit?
 toEdit(){
    // if the id is not null
    if(this.id !== null){
      this.title = "Modify product";
      this._productService.getOneProduct(this.id).subscribe(data => {
        console.log(data);
        this.productForm.setValue({
          // what should show in the fields
          product:  data.name,
          category: data.category,
          location: data.location, // you don't change and I don't know why!
          price:    data.price
        });
        console.log(data.location);
      });
    }
 }
 // end edit
}
// end class
