import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ManageAppService } from './../../services/manage-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private ngZone: NgZone, private manageApp: ManageAppService) {}
  doctorsPopup = 'closed';
  dailySchadule = 'closed';

  options: AnimationOptions = {
    path: '/assets/hotspot.json',
    loop: false,
  };

  private animationItem: AnimationItem[] = [];

  ngOnInit(): void {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem[0] = animationItem;
  }
  // open doctors-list popup
  opendoctorsPopup(): void {
    this.doctorsPopup = 'opened';
  }
  // open daily-schadule popup
  openDailySchadulePopup(): void {
    this.dailySchadule = 'opened';
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

  // close doctors-list popup
  closeDoctorsPopup(status: string): void {
    this.doctorsPopup = status;
  }
  // close daily-schadule popup
  closeDailySchedual(status: string): void {
    this.dailySchadule = status;
  }
  clickOutsideDoctorsList(e: Event): void {
    const doctorPopup = document.getElementById('app-doctor-list');
    e.stopPropagation();
    if (e.target === doctorPopup) {
      this.closeDoctorsPopup('closed');
    }
  }
  clickOutsideDailySchadule(e: Event): void {
    const dailySchadulePopup = document.getElementById('daily-schadule');
    if (e.target === dailySchadulePopup) {
      this.closeDailySchedual('closed');
    }
  }
}
