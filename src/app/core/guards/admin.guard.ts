import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { selectAuthState, selectSesionState } from '../../autenticacion/state/auth.selectors';

import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../services/sesion.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authStore: Store<AuthState>,
    private router: Router){
      
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) => {
        if (sesion.usuarioActivo?.esAdmin){
          return true;
        } else {
          alert('No tiene los permisos necesarios');
          this.router.navigate(['inicio']);
          return false;
        }
      })
    )
  }
  
}
