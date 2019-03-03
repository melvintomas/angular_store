import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.styl']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[];

  ngOnInit() {
    this.productService.getProducts().subscribe((products)=>{
      this.products = products
    })
  }

}
