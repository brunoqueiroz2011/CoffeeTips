import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, ValidatorFn }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RadioOption } from 'app/shared/radio/radio-option-model';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile, PaymentTypes } from './profile.model';
import { Http } from '@angular/http';
import { ProfileService } from './profile.service';

@Component({
  selector: 'ctd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {   

  profileForm: FormGroup

  paymentOptions = [    
    {name:'Dinheiro', id: 'MON'},
    {name:'Cartão Debito', id: 'DEB'},
    {name:'Cartão Credito', id: 'CRE'},
    {name:'Alelo Refeição', id: 'REF'},
    {name:'Alelo Alimentação', id: 'ALI'},
    {name:'Ticket Restaurante', id: 'TIC'},
    {name:'Sodexo', id: 'SOD'}
  ];

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  selectedFile : string = null;

  @Input() nameCoffeeShop: string = this.routes.snapshot.params['name']

  constructor(private profileService: ProfileService,
              private router: Router,
              private routes: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    const controls = this.paymentOptions.map(c => new FormControl(false));
    controls[0].setValue(true);


    this.profileForm = this.formBuilder.group({
      imgLogo: this.formBuilder.control('',[Validators.required]),
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      description: this.formBuilder.control('',[Validators.required]),
      neighborhood: this.formBuilder.control('',[Validators.required]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      horary: this.formBuilder.control('',[Validators.required]),
      telephone: this.formBuilder.control('',[Validators.required]),      
      email: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPattern)]),      
      intagram: this.formBuilder.control('',[]),      
      facebook: this.formBuilder.control('',[]),            
      paymentOptions: new FormArray(controls, this.minSelectedCheckboxes(1)),
      termsConditions: this.formBuilder.control('',[Validators.required])
    })
  }

  onFileSelected(event){    
    this.selectedFile = event.target.files[0].name        
  }

  checkProfile(profile: Profile){
    const selectedOrderIds = this.profileForm.value.paymentOptions
      .map((v, i) => v ? this.paymentOptions[i].id : null)
      .filter(v => v !== null);      
    this.profileForm.value.paymentOptions = selectedOrderIds
    this.profileForm.value.imgLogo = this.selectedFile
    console.log(this.profileForm);

    this.profileService.postProfile(profile).subscribe((profileID: string) => {
      this.router.navigate(['/home'])
    })        
  }

  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      return totalSelected >= min ? null : { required: true };
    };  
    return validator;
  }  

}

