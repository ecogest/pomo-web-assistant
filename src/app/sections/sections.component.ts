import { Component } from '@angular/core';
import { SectionTitle } from '../section/section.component';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent {
  sections: SectionTitle[] = [
    {
      icon: '🏙️',
      content: 'This morning',
    },
    {
      icon: '🌇',
      content: 'This afternoon',
    },
    {
      icon: '🌃',
      content: 'Tonight',
    },
  ];
}
