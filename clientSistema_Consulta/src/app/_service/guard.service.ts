import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginService } from './login.service';
import { MenuService } from './menu.service';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Menu } from '../_model/menu';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private loginService:LoginService,
    private menuService:MenuService,
    private router:Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    // Usuario logueado
    let rpta = this.loginService.estaLogueado();
    console.log({rpta});
    if (!rpta) {
      this.loginService.cerrarSesion();
      return false;
    }

    // verificar token no expirado

    const helper = new JwtHelperService();
    let token = localStorage.getItem(environment.TOKEN_NAME);
    if (!helper.isTokenExpired(token)) {
        // verificar si tienes el rol
        let url = state.url;
        console.log(url);
              const decodedToken = helper.decodeToken(token);

              return this.menuService.listarPorUsuario(decodedToken.user_name).pipe(map((data:Menu[]) =>{
                   this.menuService.setMenuCambio(data);

                  let cont = 0;
                  for (let m of data) {
                    if (url.startsWith(m.url)) {
                      cont++;
                      break;
                    }
                  }
                
                  if (cont > 0) {
                    return true;
                  } else {
                    this.router.navigate(['/pages/not-403']);
                    return false;
                  }
              }));
          
     
        
    } else{
      this.loginService.cerrarSesion();
      return false;
    }


  }


}
