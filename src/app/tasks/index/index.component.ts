import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private taskService: TasksService) { }
  public tasks={};
  public keys;
  public title;
  public err;
  ngOnInit() {
    this.allTasks();
  }

    changeState(state,id)
    {
      let _state = (state) ? false : true;
      let task = {
        "id": id,
        "done": _state
      };
      console.log(_state);
      this.taskService.updateTask(task)
      .subscribe(
          data => {
            this.allTasks();
            console.log("Task %s",(_state)?"Done!":"Undone!");
          },
          err => {
            return Observable.throw(err);
          }
        );     
    }

    deleteTask(id,key)
    {
      this.taskService.deleteTask(id)
      .subscribe(
          data => {
            this.allTasks();
            console.log('Task Deleted!');
          },
          err => {
            return Observable.throw(err);
          }
        );      
    }

    addTask()
    {
      if(!this.title || /^\s*$/.test(this.title))
      {
        this.err = "Please add a title!";
        return;
      }
      let task = {
        "title": this.title,
      };
      this.taskService.createTask(task)
      .subscribe(
          data => {
            this.allTasks();
            console.log('Task created! %s',JSON.stringify(data));
          },
          err => {
            return Observable.throw(err);
          }
        );      
    }

  	allTasks()
  	{
  		this.taskService.showAllTasks()
  		.subscribe(

  			data => {
          this.tasks = data;
          this.keys = Object.keys(data);
        },
  			err => {console.error(err)},
  			() => {console.log('Tasks loaded successfully');}
  			);
  	}
}
