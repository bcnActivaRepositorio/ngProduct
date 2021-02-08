import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'pr-listed-product',
  templateUrl: './listed-product.component.html',
  styleUrls: ['./listed-product.component.css']
})
export class ListedProductComponent implements OnInit {

  // list of products
  listProducts: Producto[] = [];
  title: string = "product's list";
  constructor(private _productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProduct();

  }

  getProduct(){
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error =>{
      console.error(error);
    })
  }

  deleteProduct(id: any){
    this._productService.deleteProducts(id).subscribe(data => {
      this.toastr.info('Product has been erased from your list', 'Product deleted');
      console.log('Product deleted');
      this.getProduct();
    }, error => {
      console.log(error);
      this.toastr.error(`we couldn't delete the product`, 'Error during operation');
    });
  }
}
