import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-layout-login',
  standalone: true,
  imports: [],
  templateUrl: './default-layout-login.component.html',
  styleUrl: './default-layout-login.component.scss'
})
export class DefaultLayoutLoginComponent {
[x: string]: any;
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();
  
  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
