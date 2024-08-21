import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output()
  public close = new EventEmitter<void>();
  
  @Input({
    required: false
  })
  user?: User

  
  private readonly tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  newTitle = "";
  newSummary = "";
  newDueDate = "";

  onFormSubmit(){
    this.tasksService.addTask({
      title: this.newTitle,
      summary: this.newSummary,
      dueDate: this.newDueDate
    },
    this.user?.id!);

    this.close.emit();
  }
}
