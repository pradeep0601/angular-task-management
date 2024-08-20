import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { TaskFormComponent } from "./task-form/task-form.component";
import { NewTask } from './task-form/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: false })
  user?: User;

  @Output()
  addTask = new EventEmitter<boolean>();

  get selectedTasks() {
    console.log("userID: ", this.user?.id);
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  isAddingNewTask = false;
  
  onAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }

  addNewTask(newTask: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user?.id!,
      ...newTask
    });
    this.isAddingNewTask = false;
  }

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master React',
      summary: 'Learn react',
      dueDate: '2024-11-10',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Nothing',
      summary: 'Learn nothing',
      dueDate: '2024-08-18',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Enjoy',
      summary: 'yoy yo',
      dueDate: '2024-09-25',
    },
  ];
}
