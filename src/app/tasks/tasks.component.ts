import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { TaskFormComponent } from "./task-form/task-form.component";
import { NewTask } from './task-form/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private readonly tasksService: TasksService){}

  @Input({ required: false })
  user?: User;

  @Output()
  addTask = new EventEmitter<boolean>();

  get selectedTasks() {
    console.log("userID: ", this.user?.id);
    return this.tasksService.getUserTasks(this.user?.id!);
  }
  
  isAddingNewTask = false;
  
  onAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }
}
