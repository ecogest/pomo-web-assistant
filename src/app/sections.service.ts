import { Injectable } from '@angular/core';

export interface Section {
  icon?: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  sections: Section[] = [
    {
      icon: '🏙️',
      title: 'This morning',
    },
    {
      icon: '🌇',
      title: 'This afternoon',
    },
    {
      icon: '🌃',
      title: 'Tonight',
    },
  ];
}
