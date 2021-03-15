import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Subscription } from 'rxjs';
import { ManageAppService } from './../../services/manage-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private ngZone: NgZone, private manageApp: ManageAppService) {}
  doctorsPopup = 'closed';

  options: AnimationOptions = {
    path: '/assets/hotspot.json',
    loop: false,
  };

  private animationItem: AnimationItem[] = [];

  ngOnInit(): void {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem[0] = animationItem;
  }

  opendoctorsPopup(): void {
    this.doctorsPopup = 'opened';
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

  closeDoctorsPopup(status: string): void {
    this.doctorsPopup = status;
  }
}
