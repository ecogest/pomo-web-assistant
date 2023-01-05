import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;

  statusControl = new FormControl<boolean>(false, { nonNullable: true });
}
