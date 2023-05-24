import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent {
  tasks: string[] = []
  newTask: string = ''

  agregarTarea() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask)
      this.newTask = ''
    }
  }

  eliminarTarea(task: string) {
    const index = this.tasks.indexOf(task)
    if (index !== -1) {
      this.tasks.splice(index, 1)
    }
  }
}
