import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { NgStyle, NgClass } from '@angular/common';


@Component({
  selector: 'app-task-item',
  imports: [
    FontAwesomeModule,
    NgStyle,
    NgClass
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes = faTimes;

  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }

}
