import { Component, OnInit } from '@angular/core';
import { MyEvent } from '../event.model';
import { MyEventService } from '../event.service';

@Component({
  selector: 'ctd-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  nameCoffeeShop = "CoffeeCorner"

  events : MyEvent

  constructor(private eventService: MyEventService) { }

  ngOnInit() {
    this.eventService.qtdEvents(this.events).subscribe(myEvents => this.events = myEvents)
  }

}
