import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrl: './nav-right.component.scss'
})
export class NavRightComponent {
  @Input() styleSelectorToggle!: boolean;
  @Output() Customize = new EventEmitter();
  public windowWidth: number | undefined;
  public screenFull: boolean = true;

  constructor() {
    this.windowWidth = window.innerWidth;

  }
  profile = [
    {
   //   icon: 'edit',
      title: 'Edit Profile'
    },
    {
   //   icon: 'user',
      title: 'View Profile'
    },
    {
     // icon: 'profile',
      title: 'Social Profile'
    },
    {
      //icon: 'wallet',
      title: 'Billing'
    }
  ];

  setting = [
    {
      //icon: 'question-circle',
      title: 'Support'
    },
    {
     // icon: 'user',
      title: 'Account Settings'
    },
    {
    //  icon: 'lock',
      title: 'Privacy Center'
    },
    {
     // icon: 'comment',
      title: 'Feedback'
    },
    {
     // icon: 'unordered-list',
     title: 'History'
    }
  ];
}
