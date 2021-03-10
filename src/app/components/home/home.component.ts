import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  options: AnimationOptions = {
    path: '/assets/hotspot.json',
    loop: false,
  };

  private animationItem: AnimationItem[] = [];

  constructor(private ngZone: NgZone) {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem[0] = animationItem;
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem[0].stop());
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem[0].play());
  }

  onLoopComplete(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem[0].stop());
  }
}
