import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-daily-schadule',
  templateUrl: './daily-schadule.component.html',
  styleUrls: ['./daily-schadule.component.scss'],
})
export class DailySchaduleComponent implements OnInit {
  @Input() dailySchaduleStatus = '';
  @Output() closeDailySchadulePopup = new EventEmitter();
  today = new Date();
  customOptions: OwlOptions = {
    stagePadding: 0,
    items: 8,
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: false,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 5,
      },
      740: {
        items: 5,
      },
      940: {
        items: 5,
      },
    },
  };

  scheduals = [
    {
      id: '1',
      date: 'Today',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
    {
      id: '2',
      date: 'Tomorrow',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
    {
      id: '3',
      date: 'Sat 06/02',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
    {
      id: '4',
      date: 'Sun 07/02',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
    {
      id: '5',
      date: 'Mon 08/02',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
    {
      id: '6',
      date: 'Tue 09/02 ',
      times: ['8.00 AM', '9.00 AM', '10.00 AM', '11.00 AM'],
    },
  ];

  doctors = [
    {
      id: '1',
      name: 'John Doe',
      spec: 'Medicine Specialist',
      rate: '4',
    },
    {
      id: '2',
      name: 'Mohsen Doe',
      spec: 'Graphic Specialist',
      rate: '3',
    },
    {
      id: '3',
      name: 'Mahmoud Doe',
      spec: 'Dentist Specialist',
      rate: '4',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
  }

  closeDailySchadulePop(): void {
    this.closeDailySchadulePopup.emit('closed');
  }
}
