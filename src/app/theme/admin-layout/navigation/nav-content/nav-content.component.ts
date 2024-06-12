import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { NavigationItem, NavigationItems } from '../navigation';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit {
  @Output() NavCollapsedMob: EventEmitter<string> = new EventEmitter();

  navigation = NavigationItems;
  windowWidth = window.innerWidth;

  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
  ) {}

  ngOnInit() {
    if (this.windowWidth < 1025) {
      const navbar = document.querySelector('.coded-navbar') as HTMLDivElement | null;
      if (navbar) {
        navbar.classList.add('menupos-static');
      }
    }
  }

  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = `a.nav-link[href='${current_url}']`;
    const ele = document.querySelector(link);
    
    if (ele) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }

  navMob() {
    const navElement = document.querySelector('app-navigation.coded-navbar') as HTMLElement | null;
    if (this.windowWidth < 1025 && navElement?.classList.contains('mob-open')) {
      this.NavCollapsedMob.emit();
    }
  }
}
