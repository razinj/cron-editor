import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [CronEditorComponent, TimePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [CronEditorComponent]
})
export class CronEditorModule { }
