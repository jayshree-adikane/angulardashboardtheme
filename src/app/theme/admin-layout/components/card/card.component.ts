// Angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardTitle!: string;

  @Input() cardClass!: string;


  @Input() showContent = true;


  @Input() blockClass!: string;

 
  @Input() headerClass!: string;

  @Input() showHeader = true;

  @Input() padding = 20; // set default to 24 px

 
  @ContentChild('headerOptionsTemplate') headerOptionsTemplate!: TemplateRef<ElementRef>;

  @ContentChild('headerTitleTemplate') headerTitleTemplate!: TemplateRef<ElementRef>;
}
