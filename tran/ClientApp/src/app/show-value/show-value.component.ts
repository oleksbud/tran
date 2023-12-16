import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.css']
})
export class ShowValueComponent {
  @Input('value') currentValue = '';

}
