import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline
} from '@ant-design/icons-angular/icons';
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

  constructor(private iconService: IconService) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline
      ]
    );
  }
  profile = [
    {
      icon: 'edit',
      title: 'Edit Profile'
    },
    {
      icon: 'user',
      title: 'View Profile'
    },
    {
      icon: 'profile',
      title: 'Social Profile'
    },
    {
      icon: 'wallet',
      title: 'Billing'
    }
  ];

  setting = [
    {
      icon: 'question-circle',
      title: 'Support'
    },
    {
      icon: 'user',
      title: 'Account Settings'
    },
    {
      icon: 'lock',
      title: 'Privacy Center'
    },
    {
      icon: 'comment',
      title: 'Feedback'
    },
    {
      icon: 'unordered-list',
      title: 'History'
    }
  ];
}
