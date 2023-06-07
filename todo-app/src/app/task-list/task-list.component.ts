import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnChanges {
  // Lo que va en @Input() es lo que se envia al html
  // "tareas" es el renombramiento a la variable
  @Input("tasks") tareas: Task[] = [];
  @Input() filter: string = 'all';

  filteredTasks: Task[] = [];

  updateTaskStatus(task: Task) {
    task.completed = !task.completed;
    this.filterTasks()
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks'] || changes['filter']) {
      this.filterTasks();
    }
  }

  filterTasks() {
    if (this.filter === 'completed') {
      this.filteredTasks = this.tareas.filter(tareas => tareas.completed);
    } else if (this.filter === 'uncompleted') {
      this.filteredTasks = this.tareas.filter(tareas => !tareas.completed);
    } else {
      this.filteredTasks = this.tareas;
    }
  }
}

interface Task {
  name: string;
  completed: boolean;
}