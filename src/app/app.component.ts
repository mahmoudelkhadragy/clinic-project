import { ManageAppService } from './services/manage-app.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  JournyStarted = true;
  subs = new Subscription();

  constructor(private manageApp: ManageAppService) {}

  ngOnInit(): void {
    // when component init we need to set journystarted value
    this.isJournyStartedEmitted();
    // check if localstorage is setted from the beginneing
    this.isJournyStarted();
  }

  // check if localstorage is setted to a value or not
  isJournyStarted(): void {
    const isStartedBefore = this.manageApp.getLocalStorage();
    if (isStartedBefore) {
      this.JournyStarted = false;
    } else {
      this.JournyStarted = true;
    }
  }

  // get value from subject to see if journy is started
  isJournyStartedEmitted(): void {
    this.subs = this.manageApp.recieveJournyValue().subscribe((value) => {
      if (value === 'started') {
        this.JournyStarted = false;
      } else {
        this.JournyStarted = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
