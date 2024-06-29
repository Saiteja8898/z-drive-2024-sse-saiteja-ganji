import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  title = 'Create';
  @Input() eventName = 'Sample Event';
  @Input() eventDescription = ' sample desc';

  @Output() saveForm =  new EventEmitter()
  @Output() closeForm =  new EventEmitter()

  onSubmit() {
    this.saveForm.emit({name: this.eventName, desc: this.eventDescription})
  }

}
