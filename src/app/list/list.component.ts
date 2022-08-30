import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [TasksService]
})

export class ListComponent implements OnInit {

  myItem: any = localStorage;

  inputText: string = '';

  newTask = {};

  result: any;

  constructor(private tasksService: TasksService) { }


  ngOnInit(): void {
    this.myItem = localStorage.getItem('Tasks');
    if (this.myItem === null) {
      this.result = [];
    } else {
      this.result = JSON.parse(this.myItem);
    }
  }  
  
  public showStatus() {
    let test = document.querySelectorAll('.table__content-row-cell-item-default');
    test.forEach(element => {
      element.addEventListener('click', () => {
        element.classList.toggle('showStatus');
      })
    });
  }

  public addTask() {
    const newEndDate = new Date();
    

    this.newTask = {
      id: this.tasksService.createId(),
      nameTask: this.inputText,
      status: 'In progress',
      endDate: newEndDate.setDate(newEndDate.getDate() + 7)
    }

    this.result.push(this.newTask);
    localStorage.setItem('Tasks', JSON.stringify(this.result));
    this.result = this.tasksService.getTask();
  }

  public removeTask(item: any) {
    this.result.splice(item.id - 1, 1);
    for (let index = 0; index < this.result.length; index++) {
      this.result[index].id = index + 1;
    }
    localStorage.setItem('Tasks', JSON.stringify(this.result));
    this.result = this.tasksService.getTask();
  }

}
