import { Injectable } from '@angular/core';
import { Section } from './sections.service';

export type TaskStatus = 'todo' | 'ongoing' | 'done';

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
  private tasks: Task[] = [new Task('taks1'), new Task('task2')];

  push(properties: TaskUpdateProperties) {
    this.tasks.push(new Task(properties));
  }

  delete(task: Task) {
    const index = this.tasks.findIndex((value) => value === task);
    if (index != -1) this.tasks.splice(index, 1);
  }

  getTasks(section?: Section) {
    return this.tasks.filter((task) => task.section === section);
  }
}
