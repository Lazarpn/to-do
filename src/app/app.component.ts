import { Component, OnInit } from '@angular/core';
import { TasksService } from './shared/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getTasksFromLocal();
  }
}
