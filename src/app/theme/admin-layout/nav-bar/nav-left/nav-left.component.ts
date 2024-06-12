import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { MenuUnfoldOutline, MenuFoldOutline, SearchOutline } from '@ant-design/icons-angular/icons';
import { IconService } from '@ant-design/icons-angular';
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

  constructor(private iconService: IconService) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline, SearchOutline]);
  }

  navCollapse() {
    this.NavCollapse.emit();
  }

}
