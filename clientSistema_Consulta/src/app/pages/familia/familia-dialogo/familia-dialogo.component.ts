import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Familia } from 'src/app/_model/familia';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-familia-dialogo',
  templateUrl: './familia-dialogo.component.html',
  styleUrls: ['./familia-dialogo.component.css']
})
export class FamiliaDialogoComponent implements OnInit {

  familia:Familia;
  form:FormGroup;

  constructor(
    private dialogRef: MatDialogRef<FamiliaDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Familia,
    private familiaService: FamiliaService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.familia={...this.data};

    if (this.familia != null && this.familia.idFamilia > 0) {
      //MODIFICAR
      this.form= this.fb.group({
        id:[this.familia.idFamilia],
         nombre:[this.familia.nombre ,  [Validators.required]],
         estado:[this.familia.estado , [Validators.required]],
         orden:[ this.familia.orden , [Validators.required]],
     })
      
    }else{
      //REGISTRAR
      this.form= this.fb.group({
        id:[0],
         nombre:[ ,  [Validators.required]],
         estado:[ , [Validators.required]],
         orden:[ , [Validators.required]],
     })
    }

  }

  
  operar() {


    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let familiafinal= new Familia();
    familiafinal.idFamilia  = this.form.value['id'];
    familiafinal.estado  = this.form.value['estado'];
    familiafinal.orden  = this.form.value['orden'];
    familiafinal.nombre  = this.form.value['nombre'];


    if (this.familia != null && this.familia.idFamilia > 0) {
      //MODIFICAR
      this.familiaService.modificar(familiafinal).pipe(switchMap( ()=> {
        return this.familiaService.listar();
      }))
      .subscribe(data => {
        this.familiaService.setFamiliaCambio(data);
        this.familiaService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.familiaService.registrar(familiafinal).pipe(switchMap( ()=> {
        return this.familiaService.listar();
      }))      
      .subscribe(data => {
        this.familiaService.setFamiliaCambio(data);
        this.familiaService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }

}
