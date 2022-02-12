import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Clase } from 'src/app/_model/clase';
import { Familia } from 'src/app/_model/familia';
import { ClaseService } from 'src/app/_service/clase.service';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-clase-dialogo',
  templateUrl: './clase-dialogo.component.html',
  styleUrls: ['./clase-dialogo.component.css']
})
export class ClaseDialogoComponent implements OnInit {
  clase:Clase;
  familias:Familia[];
  form?:FormGroup;



  constructor(
    private dialogRef: MatDialogRef<ClaseDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Clase,
    private claseService: ClaseService,
    private familiaService:FamiliaService,
    private fb:FormBuilder,


  ) { }

  ngOnInit(): void {
    this.familiaService.listar().subscribe(data=>{
      this.familias=data;
    });
    this.clase={...this.data};
      if (this.clase != null && this.clase.idClase > 0) {
        this.form=this.fb.group({
          id:[this.clase.idClase],
          nombre:[this.clase.nombre ,  [Validators.required]],
          estado:[this.clase.estado , [Validators.required]],
          orden:[ this.clase.orden , [Validators.required]],
          familia:[this.clase.familia.idFamilia , [Validators.required]]
        });
      }
      else{
        this.form=this.fb.group({
          id:[0],
          nombre:[, [Validators.required]],
          estado:[, [Validators.required]],
          orden:[, [Validators.required]],
          familia:[, [Validators.required]]
        });
    
      }
    
  }
  
  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let clasefinal = new Clase();

      clasefinal.idClase = this.form.value['id'];    
      clasefinal.nombre = this.form.value['nombre'];
      clasefinal.estado = this.form.value['estado'];
      clasefinal.orden = this.form.value['orden'];
      let familiaupdate= new Familia();
      familiaupdate.idFamilia=this.form.value['familia'];
      clasefinal.familia=familiaupdate;
     

    if (this.clase != null && this.clase.idClase > 0) {
      
      
      this.claseService.modificar(clasefinal).pipe(switchMap( ()=> {
        return this.claseService.listar();
      }))
      .subscribe(data => {
        this.claseService.setClaseCambio(data);
        this.claseService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      
      this.claseService.registrar(clasefinal).pipe(switchMap( ()=> {
        return this.claseService.listar();
      }))      
      .subscribe(data => {
        this.claseService.setClaseCambio(data);
        this.claseService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }


}
