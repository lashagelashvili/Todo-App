import { Component, OnInit } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {

  tasks: Task[] = [
    { name: 'do smt', done: false },
    { name: 'do blasld', done: true },
    { name: 'do homework', done: false },
  ];

  saveItems() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  constructor() { }

  ngOnInit(): void {
    this.getItems();
  }

  addTask(input: HTMLInputElement) {
    input.blur();
    if (input.value === '') {
      alert('please inserts a value');
      return;
    }
    this.tasks.unshift({ name: input.value, done: false })
    this.saveItems();
    input.value = '';
  }

  onDelete(index: number) {
    this.tasks.splice(index, 1);
    this.saveItems();
  }

  onDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.saveItems();
  }

  getItems() {
    const tasks = localStorage.getItem('tasks');
    if (!tasks) return;
    this.tasks = JSON.parse(tasks);
  }
}
