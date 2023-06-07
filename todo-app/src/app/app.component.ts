import { Component, ViewChild } from '@angular/core';
import { TaskFilterComponent } from './task-filter/task-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  addTask(task: string) {
    const newTask: Task = { name: task, completed: false }; // Crear un objeto Task con el nombre y el estado de completado
    this.tasks.push(newTask);
  }
}

interface Task {
  name: string;
  completed: boolean;
}
