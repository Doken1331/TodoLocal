import { Injectable } from '@angular/core';
import { Itask } from './interface';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskData: Itask[] = [];

  constructor() {
    this.taskData = this.getTask();
  }

  public createId() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let idLength = 6;
    let id = "";
    for (let i = 0; i <= idLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      id += chars.substring(randomNumber, randomNumber +1);
    }
    return id;
  }

  public getTask() {
    return JSON.parse(localStorage.getItem('Tasks') || '[]');
  }

  public setTask() {
    
  }

}
