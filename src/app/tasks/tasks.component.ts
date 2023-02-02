import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];
  subscription: Subscription;
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.subscription = this.tasksService.tasksChanged.subscribe(
      (tasks) => (this.tasks = tasks)
    );
  }
}
