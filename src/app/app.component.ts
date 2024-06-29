import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-invites';

  events: any[] = [];
  showForm = false;

  showCreateForm() {
    this.showForm = true;
  }

  onSave(data: any) {
    console.log(data);
    this.events.push(data);
    
    this.showForm = false;
    
  }

  onCloseForm() {
    this.showForm = false;
  }
}
