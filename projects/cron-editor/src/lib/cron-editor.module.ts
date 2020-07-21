import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronEditorComponent } from './cron-editor.component';
import { FormsModule } from '@angular/forms';
import { TimePickerComponent } from './time-picker/time-picker.component';



@NgModule({
  // declarations: [CronEditorComponent],
  // imports: [
  // ],
  // exports: [CronEditorComponent]
  declarations: [CronEditorComponent, TimePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [CronEditorComponent]
})
export class CronEditorModule { }
