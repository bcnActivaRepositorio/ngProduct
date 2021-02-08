import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // url locallhost database
  url: string = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) { }

  // getProducts
  getProducts(): Observable<any>{
    console.log('get products browser works');
    // parameters to get the http of our database
   return this.http.get(this.url);
  }
  // delete
  deleteProducts(id: string): Observable<any> {
    console.log('delete works');
    return this.http.delete(this.url + id);
  }
  // create
  createProducts(product: Producto): Observable<any>{
    console.log('create works');
    return this.http.post(this.url, product);
  }
  // get
  getOneProduct(id: string): Observable<any>{
    console.log('get works');
    return this.http.get(this.url + id);
  }

  // edit
  editProduct(id: string, product: Producto): Observable<any>{
    console.log('edit works');
    return this.http.put(this.url + id, product);
  }
}
