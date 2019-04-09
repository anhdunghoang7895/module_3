import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodoService} from './../services/todo.service';
import { Location } from '@angular/common';
import {Todo} from './../models/todo';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  public Todo: Todo[];

  constructor(private route: ActivatedRoute,
              private TodoService: TodoService,
               private location: Location) { }

  ngOnInit() {
    this.GetTodo();
  }
  GetTodo(): void {
    const id =  +this.route.snapshot.paramMap.get('id');
    return this.TodoService.getTodos().subscribe(todo => this.Todo = todo);
  }
}
