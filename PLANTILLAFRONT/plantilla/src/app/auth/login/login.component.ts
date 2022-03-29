import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  usuario: string;
  clave: string;
  mensaje: string;
  error: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    console.log("gg")
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
    
   
      localStorage.setItem(environment.TOKEN_NAME, data.access_token);    
      this.router.navigate(['/dashboard/familia']);
    });
  }

 
}
