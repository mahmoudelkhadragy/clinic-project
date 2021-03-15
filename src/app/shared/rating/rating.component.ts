import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() totalRate: any = '5';
  @Input() rate: any = '4';
  stars: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalRate = +this.totalRate;
    this.rate = +this.rate;
    this.stars = new Array(this.totalRate);
  }

  isRated(i: number): boolean {
    if (i <= this.rate) {
      return true;
    } else {
      return false;
    }
  }
}
