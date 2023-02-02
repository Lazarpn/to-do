import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  changesSaved: boolean = true;
  isDisabled: boolean = true;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  onFormSubmit() {}

  onTaskConfirm() {
    this.isDisabled = true;
    this.changesSaved = true;
  }

  onTaskEdit() {
    this.isDisabled = false;
    this.changesSaved = false;
  }

  onTaskDelete() {
    const id = this.tasksService.getMeal(this.task);
    this.tasksService.deleteTask(id);
  }
}
