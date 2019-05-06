import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { RadioOption } from 'app/shared/radio/radio-option-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'ctd-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() nameCoffeeShop: string = this.routes.snapshot.params['name']

  nameProduct: string = 'Afogato'

  statusProducts: RadioOption[] = [    
    {label:'Ativo', value: 'ON'},
    {label:'Desativado', value: 'OFF'},    
  ];

  selectedFile : string = null;
  
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private router: Router,
              private routes: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      imgLogo: this.formBuilder.control('',[Validators.required]),
      name: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('',[Validators.required]),
      ingredients: this.formBuilder.control('',[Validators.required]),      
      statusProduct: this.formBuilder.control('',[Validators.required])      
    })
  }

  onFileSelected(event){    
    this.selectedFile = event.target.files[0].name        
  }

  checkProduct(product: Product){        
    this.productForm.value.imgLogo = this.selectedFile    

    console.log(this.productForm.value)
    this.productService.postProduct(product).subscribe((productID: string) => {
     this.router.navigate(['/home'])      
    })
  }
  

}
