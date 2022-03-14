import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
 

  constructor( private loginService: LoginService,
    private menuService: MenuService,
    private router: Router) { }

  
  
    
}
