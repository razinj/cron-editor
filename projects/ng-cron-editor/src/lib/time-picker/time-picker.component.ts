import { Component, Input } from '@angular/core';
import { TimePicker } from '../models/timePicker';

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

@Component({
  selector: 'cron-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['../cron-editor.shared.scss']
})
export class TimePickerComponent {

  @Input() public disabled: boolean;
  @Input() public time: TimePicker;
  @Input() public hideSeconds: boolean;

  public hours = [...range(0, 23)];
  public minutes = [...range(0, 59)];
  public seconds = [...range(0, 59)];
  public hourTypes = ['AM', 'PM'];

}
