import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Todo} from './../models/todo';
import {TodoService} from './../services/todo.service';

@Component({
    selector: 'app-todo-app',
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
   
    
    todos: Todo[];
    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todoService.getTodos().subscribe(todos =>{
            this.todos = todos;
        });
    }

   


}