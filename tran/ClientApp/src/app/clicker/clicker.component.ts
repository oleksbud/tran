import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
  @Input() label: string = 'Ok';
  @Input() defaultValue: string = 'Ok';
  @Output() onClick = new EventEmitter<string>();

  clicked() {
    this.onClick.emit(this.defaultValue);
  }
}
