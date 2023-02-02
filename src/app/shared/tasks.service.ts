import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  tasksChanged = new Subject<any>();

  constructor() {}

  getTask(task: Task) {
    return this.tasks.indexOf(task);
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.next(this.tasks.slice());
    this.setTasksForLocal();
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
    this.tasksChanged.next(this.tasks.slice());
    this.setTasksForLocal();
  }

  getTasks() {
    return this.tasks.slice();
  }

  taskUpdate(index: number, newTask: Task) {
    console.log(index, newTask);
    this.tasks[index] = newTask;
    this.tasksChanged.next(this.tasks.slice());
    this.setTasksForLocal();
  }

  setTasksForLocal() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasksFromLocal() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}
