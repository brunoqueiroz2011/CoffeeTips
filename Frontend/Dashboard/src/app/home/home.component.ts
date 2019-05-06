import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from 'app/product/product.model';

@Component({
  selector: 'ctd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    product : number

    qtdProducts: string
    qtdEvent: string = "400"
    qtdLikes: string = "400"    
    qtdComments: string
  

  constructor(private homeService: HomeService) {    
  }

  ngOnInit() {
    this.homeService.qtdPruducts().subscribe(product => 
                                              product.length > 0
                                                ? this.qtdProducts =  product.length.toString()
                                                : this.qtdProducts = "0")
    this.homeService.qtdEvents().subscribe(evento => 
                                            evento.length > 0 
                                              ? this.qtdEvent = evento.length.toString()
                                              : this.qtdEvent = "0")

    this.homeService.qtdComments().subscribe(comment => 
                                             comment.length > 0 
                                              ? this.qtdComments = comment.length.toString()
                                              : this.qtdComments = "0")                                            
  }

}
