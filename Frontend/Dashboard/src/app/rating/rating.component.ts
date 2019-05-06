import { Component, OnInit } from '@angular/core';
import { RatingService } from './rating.service';
import { Rating } from './rating.model';

@Component({
  selector: 'ctd-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  ratings : Rating

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.ratingService.reviews(this.ratings).subscribe(rating => this.ratings = rating)
  }

}
