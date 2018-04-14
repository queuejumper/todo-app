import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from "@angular/router";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
@Injectable()
export class TasksService {
  private url = "http://localhost:8000/api/todos/";
  constructor(
      private  http:HttpClient,
      private router: Router
    ) {}


  createTask(task)
  {
    return this.http.post(this.url,task);
  }
  showAllTasks()
  {
    return this.http.get(this.url);
  }
  deleteTask(id)
  {
    return this.http.delete(this.url+id);
  }
  showTaskById(id)
  {
    return this.http.get(this.url+id);
  }
  updateTask(task)
  {
    return this.http.put(this.url+task.id,task);
  }
}
