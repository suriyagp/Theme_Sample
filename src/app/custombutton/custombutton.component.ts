import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.scss']
})
export class CustombuttonComponent implements OnInit {
  @Input() button: any;
  @Output() clickEmit: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClickEvent(text:string) {
    window.alert('click called');
    this.clickEmit.emit(text);
  }


}
