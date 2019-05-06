import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyEvent } from './event.model';
import { RadioOption } from 'app/shared/radio/radio-option-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyEventService } from './event.service';

@Component({
  selector: 'ctd-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() nameCoffeeShop: string = this.routes.snapshot.params['name']

  myEventName: string = 'Afogato'

  statusProducts: RadioOption[] = [    
    {label:'Ativo', value: 'ON'},
    {label:'Desativado', value: 'OFF'},    
  ];

  selectedFile : string = null;
  
  myEventForm: FormGroup;


  hourPattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
  datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  numberPattern = /^[0-9]*$/

  constructor(private productService: MyEventService,
              private router: Router,
              private routes: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myEventForm = this.formBuilder.group({
      imgLogo: this.formBuilder.control('',[Validators.required]),
      name: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control('',[Validators.required]),
      myDate: this.formBuilder.control('',[Validators.required, Validators.pattern(this.datePattern)]),
      hour: this.formBuilder.control('',[Validators.required, Validators.pattern(this.hourPattern)]),
      local: this.formBuilder.control('',[Validators.required]),
      qtdPeople: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern)]),
    })
  }

  onFileSelected(event){    
    this.selectedFile = event.target.files[0].name        
  }

  checkEvent(myEvent: MyEvent){        
    this.myEventForm.value.imgLogo = this.selectedFile    

    console.log(this.myEventForm.value)
    this.productService.postProduct(myEvent).subscribe((myEventID: string) => {
     this.router.navigate(['/home'])      
    })
  }


}
