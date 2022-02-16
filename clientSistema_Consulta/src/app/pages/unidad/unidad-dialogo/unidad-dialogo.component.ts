import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Unidad } from 'src/app/_model/unidad';
import { UnidadService } from 'src/app/_service/unidad.service';

@Component({
  selector: 'app-unidad-dialogo',
  templateUrl: './unidad-dialogo.component.html',
  styleUrls: ['./unidad-dialogo.component.css']
})
export class UnidadDialogoComponent implements OnInit {

  unidad:Unidad;
  form:FormGroup;

  constructor(private dialogRef: MatDialogRef<UnidadDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Unidad,
    private unidadService:UnidadService,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.unidad= {... this.data}
    if (this.unidad != null && this.unidad.idUnidad > 0) {

      //MODIFICAR
     this.form= this.fb.group({
         id:[this.unidad.idUnidad],
          nombre:[this.unidad.nombre ,  [Validators.required]]
      })
      
    }else{
      //REGISTRAR
     this.form= this.fb.group({
        id:[0],
         nombre:[ ,  [Validators.required]]
     })
     
    }

  }

  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let unidadfinal=new Unidad();
    unidadfinal.idUnidad  =   this.form.value['id'];
    unidadfinal.nombre   =   this.form.value['nombre'];

   
    if (this.unidad != null && this.unidad.idUnidad > 0) {
     

      //MODIFICAR
      this.unidadService.modificar(unidadfinal).pipe(switchMap( ()=> {
        return this.unidadService.listar();
      }))
      .subscribe(data => {
        this.unidadService.setUnidadCambio(data);
        this.unidadService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.unidadService.registrar(this.form.value).pipe(switchMap( ()=> {
        return this.unidadService.listar();
      }))      
      .subscribe(data => {
        this.unidadService.setUnidadCambio(data);
        this.unidadService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }


}
