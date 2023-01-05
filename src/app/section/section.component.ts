import { Component, Input } from '@angular/core';

export interface SectionTitle {
  icon?: string;
  content: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() title: SectionTitle = { content: 'Section' };
}
