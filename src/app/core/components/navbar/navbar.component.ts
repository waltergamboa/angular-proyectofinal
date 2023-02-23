import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() byComponenteVisible = new EventEmitter<string>();

  btnMenu(sender: string){
    this.byComponenteVisible.emit(sender);
  }

}
