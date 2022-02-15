import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { MarcaVehiculo } from 'src/app/_model/marcavehiculo';
import { MarcaVehiculoService } from 'src/app/_service/marca-vehiculo.service';

@Component({
  selector: 'app-marcavehiculo-dialogo',
  templateUrl: './marcavehiculo-dialogo.component.html',
  styleUrls: ['./marcavehiculo-dialogo.component.css']
})
export class MarcavehiculoDialogoComponent implements OnInit {
  marcaVehiculo:MarcaVehiculo;
  form:FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MarcavehiculoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: MarcaVehiculo,
    private marcaVehiculoService: MarcaVehiculoService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.marcaVehiculo={... this.data};

    if (this.marcaVehiculo != null && this.marcaVehiculo.idMarcaVehiculo > 0) {

      //MODIFICAR
     this.form= this.fb.group({
         id:[this.marcaVehiculo.idMarcaVehiculo],
          nombre:[this.marcaVehiculo.nombre ,  [Validators.required]],
          estado:[this.marcaVehiculo.estado , [Validators.required]],
      })
      
    }else{
      //REGISTRAR
     this.form= this.fb.group({
        id:[0],
         nombre:[ ,  [Validators.required]],
         estado:[ , [Validators.required]],
     })
     
    }

  }

    
  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let marcaVehiculofinal=new MarcaVehiculo();
        marcaVehiculofinal.idMarcaVehiculo  =   this.form.value['id'];
        marcaVehiculofinal.estado           =   this.form.value['estado'];
        marcaVehiculofinal.nombre           =   this.form.value['nombre'];

   
    if (this.marcaVehiculo != null && this.marcaVehiculo.idMarcaVehiculo > 0) {
     

      //MODIFICAR
      this.marcaVehiculoService.modificar(marcaVehiculofinal).pipe(switchMap( ()=> {
        return this.marcaVehiculoService.listar();
      }))
      .subscribe(data => {
        this.marcaVehiculoService.setMarcaVehiculoCambio(data);
        this.marcaVehiculoService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.marcaVehiculoService.registrar(this.form.value).pipe(switchMap( ()=> {
        return this.marcaVehiculoService.listar();
      }))      
      .subscribe(data => {
        this.marcaVehiculoService.setMarcaVehiculoCambio(data);
        this.marcaVehiculoService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }


}
