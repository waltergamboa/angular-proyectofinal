import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  @Output() byComponenteVisible = new EventEmitter<string>();
  
  constructor(private router: Router,
    private sesion: SesionService){
  }

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }  

  btnMenu(sender: string){
    this.byComponenteVisible.emit(sender);
  }

}
