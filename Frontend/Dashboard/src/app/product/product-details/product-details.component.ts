import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'ctd-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  nameCoffeeShop = "CoffeeCorner"

  status : string

  products : Product

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.qtdPruducts(this.products).subscribe(product => this.products = product)    
  }

  validateStatus(status : string): boolean{
    console.log(status)
    status === "ON"? this.status = "Ativo" : this.status = "";
    return status === "ON"? true : false;
  }
  validateStatusOFF(status : string): boolean{
    console.log(status)
    status === "OFF"? this.status = "Desativado" : this.status = "";
    return status === "OFF"? true : false;
  }

  setNameProduct(name: string){
    console.log(name)
  }
}
