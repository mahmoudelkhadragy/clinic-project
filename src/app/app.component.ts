import { ManageAppService } from './services/manage-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  JournyStarted = true;

  constructor(private manageApp: ManageAppService) {}

  ngOnInit(): void {
    this.isJournyStarted();
  }

  isJournyStarted(): void {
    const isStartedBefore = this.manageApp.getLocalStorage();
    if (isStartedBefore) {
      this.JournyStarted = false;
    } else {
      this.JournyStarted = true;
    }
  }
}
