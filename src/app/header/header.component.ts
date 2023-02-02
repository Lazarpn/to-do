import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  onTaskAdd() {
    const task: Task = this.form.value.task;
    this.tasksService.addTask(task);
    console.log(this.form);
    this.form.reset();
  }
}
