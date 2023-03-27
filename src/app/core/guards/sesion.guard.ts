import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthState } from 'src/app/autenticacion/state/auth.reducer';
import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { SesionService } from '../services/sesion.service';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../../autenticacion/state/auth.selectors';
import { selectSesionState } from './../../autenticacion/state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
 
  constructor(private authStore: Store<AuthState>,
    private router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion)=>{
        if(sesion.sesionActiva){
          return true;
        }else{
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    )
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion)=>{
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion)=>{
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      )
  }
}
