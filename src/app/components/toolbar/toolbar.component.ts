import { Component, Input } from '@angular/core';

import { Alumno } from '../../models/alumnos.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() alumnosInscriptos?: string;
}
