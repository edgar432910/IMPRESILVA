import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../_model/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario:string;

  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    let token = localStorage.getItem(environment.TOKEN_NAME);
    const decodeToken = helper.decodeToken(token);
    console.log(decodeToken);
    this.usuario=decodeToken.user_name;
  }

}
