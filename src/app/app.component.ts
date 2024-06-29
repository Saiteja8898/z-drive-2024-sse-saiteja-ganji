import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-invites';

  showForm = false;

  showCreateForm() {
    this.showForm = true;
  }

  onSave(data: any) {
    console.log(data)
  }

  onCloseForm() {
    this.showForm = false;
  }
}
