import { Component, inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Section } from '../sections.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Input() section?: Section;

  taskControl = new FormControl<string>('', { nonNullable: true });
  private tasksService = inject(TasksService);

  onSubmit() {
    this.tasksService.push({
      content: this.taskControl.value,
      section: this.section,
    });
    this.taskControl.reset();
  }
}
