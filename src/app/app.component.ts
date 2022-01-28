import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-demo';
  buttonDetails = [{
    class: 'btn btn-primary',
    displayText: 'primary',
    disabled: false
  },{
    class: 'btn btn-secondary',
    displayText: 'secondary',
    disabled: false
  },{
    class: 'btn',
    displayText: 'disabled',
    disabled: true
  }]

  catchEvent(event: string) {
    window.alert(event)
  }
}
