import { Component, EventEmitter, Input, Output, computed, input, signal } from '@angular/core';

export interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input<string>();
  // name = input<string>();
  
  // imagePath = computed(() => `users/${this.avatar()}`);

  // @Input({required: true})
  // avatar!: string;

  // @Input({required: true})
  // name!: string;

  // @Input({required: true})
  // id!: string;

  @Input({required: true})
  user!: User;

  get imagePath() {
    return `users/${this.user.avatar}`;
  }

  @Output()
  select = new EventEmitter<string>();

  onUserClick() {
    this.select.emit(this.user.id);
  }
}
