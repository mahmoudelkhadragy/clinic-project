import { Component, OnInit } from '@angular/core';
import { ManageAppService } from './../../services/manage-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private manageApp: ManageAppService) {}

  ngOnInit(): void {}

  // when click startjourny button set localstorage item and set subject value
  startJourny(): void {
    this.manageApp.setlocalStorage('started');
  }
}
