import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output()
  cancel = new EventEmitter<boolean>();
  
  onCancel() {
    this.cancel.emit(false);
  }

  newTitle = "";
  newSummary = "";
  newDueDate = "";

  @Output()
  formSubmit = new EventEmitter<NewTask>();

  onFormSubmit(){
    this.formSubmit.emit({
      title: this.newTitle,
      summary: this.newSummary,
      dueDate: this.newDueDate
    });
  }
}
