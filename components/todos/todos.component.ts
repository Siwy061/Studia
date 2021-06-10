import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/components/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  inputTodo: string = "";
  inpuTodoCena: number;
  inputTodoQuanity: number;
  price: number;
  cenazawszystko = [];
  sum: number;
  quanity: number;
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "pierwszy",
        price: 2,
        quanity: 3
      },
      {
        content: "drugi",
        price: 3,
        quanity: 3
      }
    ]



  }
  deleteTodo(id: Number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.renderCena();
  }
  renderCena() {
    this.sum = 0;
    this.inputTodoQuanity = 0;
    this.inputTodo = "";
    this.inpuTodoCena = 0;
    this.todos.forEach(e => {
      this.sum += e.price * e.quanity
      console.log(this.sum)
    })
  }
  addTodo() {
    if (this.inputTodo == "" || this.inpuTodoCena == NaN || this.inputTodoQuanity == NaN) {
      alert("Wprowadz wszystkie dane!!!!!!!!!!!")

    }
    else {
      this.todos.push({
        content: this.inputTodo,
        price: this.inpuTodoCena,
        quanity: this.inputTodoQuanity
      })

      this.renderCena();
    }
  }
}


