import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ManageAppService } from './../../services/manage-app.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  @Input() listOfDoctorsPopupStatus = '';
  @Output() closeListOfDoctorsPopup = new EventEmitter();
  constructor(private manageApp: ManageAppService) {}

  ngOnInit(): void {}

  closeDoctorPopup(): void {
    this.closeListOfDoctorsPopup.emit('closed');
  }
}
