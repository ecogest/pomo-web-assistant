import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Section } from './sections.service';

export type TaskStatus = 'todo' | 'done';

export interface TaskProperties {
  content: string;
  status: TaskStatus;
  section?: Section;
}

export type TaskUpdateProperties = string | Partial<TaskProperties>;

export class Task implements TaskProperties {
  content: string = '';
  status: TaskStatus = 'todo';
  section?: Section;

  constructor(properties: TaskUpdateProperties) {
    this.update(properties);
  }

  update(properties: TaskUpdateProperties) {
    if (typeof properties === 'string') this.content = properties;
    else Object.assign(this, properties);
  }
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = new BehaviorSubject<Task[]>([
    new Task('taks1'),
    new Task('task2'),
  ]);

  push(properties: TaskUpdateProperties) {
    this.tasks.value.push(new Task(properties));
    this.tasks.next(this.tasks.value);
  }

  delete(task: Task) {
    const index = this.tasks.value.findIndex((value) => value === task);
    if (index != -1) {
      this.tasks.value.splice(index, 1);
      this.tasks.next(this.tasks.value);
    }
  }

  getTasks(section?: Section) {
    return this.tasks.pipe(
      map((tasks) => tasks.filter((task) => task.section === section))
    );
  }
}
