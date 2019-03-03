import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getProducts(url? : string){
    return this.httpClient.get<Product[]>(`${this.apiURL}/products`)
  }
}
