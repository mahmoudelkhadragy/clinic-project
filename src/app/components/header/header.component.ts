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

  startJourny() {
    this.manageApp.setlocalStorage('started');
  }
}
