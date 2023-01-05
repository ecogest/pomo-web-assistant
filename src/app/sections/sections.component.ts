import { Component, inject } from '@angular/core';
import { Section, SectionsService } from '../sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent {
  sections: Section[] = inject(SectionsService).sections;
}
