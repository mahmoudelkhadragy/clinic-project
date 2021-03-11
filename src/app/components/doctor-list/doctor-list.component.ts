import { Component, OnInit } from '@angular/core';
import { ManageAppService } from './../../services/manage-app.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  @In
  constructor(private manageApp: ManageAppService) {}

  ngOnInit(): void {}

  closeDoctorPopup(): void {
    this.manageApp.openListOfDoctorsPopup('closed');
  }
}
