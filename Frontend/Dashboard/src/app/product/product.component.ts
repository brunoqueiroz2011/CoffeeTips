import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { RadioOption } from 'app/shared/radio/radio-option-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'ctd-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() nameCoffeeShop: string = this.routes.snapshot.params['name']

  numberPattern = /^[0-9]*$/

  nameProduct: string = 'Afogato'

  statusProducts: RadioOption[] = [    
    {label:'Ativo', value: 'ON'},
    {label:'Desativado', value: 'OFF'},    
  ];

  selectedFile : string = null;
  
  productForm: FormGroup;

  uploadedFiles: Array < File > ;

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
      price: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern), Validators.minLength(1)]),
      statusProduct: this.formBuilder.control('',[Validators.required])      
    })
  }

  onFileSelected(element){    
    this.uploadedFiles = element.target.files;
    console.log(element.target.files);
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        console.log(this.uploadedFiles[i] + " - " +this.uploadedFiles[i].name);
        console.log(formData);
    }
    console.log(formData);
    this.productService.uploadImagens(formData).subscribe((response)=>{
      console.log('response received is ', response);
    })
  }

  checkProduct(product: Product){        
    this.productForm.value.imgLogo = this.selectedFile    

    console.log(this.productForm.value)
    this.productService.postProduct(product).subscribe((productID: string) => {
     this.router.navigate(['/home'])      
    })
  }
  

}
