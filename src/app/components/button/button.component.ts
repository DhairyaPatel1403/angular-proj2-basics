import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgStyle
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text="";  //props
  @Input() color="";
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
