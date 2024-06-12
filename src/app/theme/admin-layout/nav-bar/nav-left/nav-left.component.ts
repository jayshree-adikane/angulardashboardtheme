import { Component,  Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.scss'
})
export class NavLeftComponent {

  @Input() navCollapsed!: boolean;
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  public windowWidth: number | undefined;

  constructor() {
    this.windowWidth = window.innerWidth;
   // this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline, SearchOutline]);
  }

  navCollapse() {
    this.NavCollapse.emit();
  }

}
