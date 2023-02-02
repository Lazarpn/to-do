import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @ViewChild('form', { static: true }) taskForm: NgForm;

  changesSaved: boolean = true;
  isDisabled: boolean = true;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  onFormSubmit() {}

  onTaskConfirm() {
    this.isDisabled = true;
    this.changesSaved = true;
    const value = this.taskForm.value;
    const taskId = this.tasksService.getTask(this.task);
    this.task = value.taskName;
    this.tasksService.taskUpdate(taskId, this.task);
  }

  onTaskEdit() {
    this.isDisabled = false;
    this.changesSaved = false;
  }

  onTaskDelete() {
    const id = this.tasksService.getTask(this.task);
    this.tasksService.deleteTask(id);
  }
}
