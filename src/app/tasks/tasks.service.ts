import { Injectable } from "@angular/core";
import { NewTask } from "./task-form/new-task.model";

@Injectable({
    providedIn: "root"
})
export class TasksService {
    private tasks = [
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

      constructor(){
        const storedTasks = localStorage.getItem("tasks");
        if(storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        }
      }

      public addTask(newTask: NewTask, userId: string) {
        this.tasks.unshift({
            ...newTask,
            userId,
            id: new Date().getTime().toString()
        });
        this.storeTasksToLocalStorage();
      }

      public deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.storeTasksToLocalStorage();
      }

      public getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      private storeTasksToLocalStorage(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
}