import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItems {
  id: number,
  task: string,
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  todoLists : TodoItems [] = [];
  newTask : string = '';

  addTodo(): void {
    if(this.newTask.trim() !== ''){
      const newTodoItem : TodoItems = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }

      this.todoLists.push(newTodoItem)
      
    }
  }

  toggleComplete(index: number): void {
    this.todoLists[index].completed = !this.todoLists[index].completed;
  }

  deleteTodo(index: number): void {
    this.todoLists = this.todoLists.filter(item => item.id != index)
  }
}
