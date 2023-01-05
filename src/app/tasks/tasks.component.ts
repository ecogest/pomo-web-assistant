import { Component, inject, Input, OnInit } from '@angular/core';
import { Section } from '../sections.service';
import { Task, TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() section?: Section;

  tasks: Task[] = [];

  private tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksService.push({
      section: this.section,
      content: `hello ${this.section?.title}`,
    });
    this.tasks = this.tasksService.getTasks(this.section);
  }
}
