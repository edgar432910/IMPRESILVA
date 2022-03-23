import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, switchMap } from 'rxjs';
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
  form:FormGroup;
  
  myControlFamilia: FormControl = new FormControl('',[Validators.required]);
  familiaFiltrados$: Observable<Familia[]>;

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
        this.LLENARCAMPO(this.clase.familia);
        this.form= new FormGroup({
          'id': new FormControl(this.clase.idClase),
          'nombre': new FormControl(this.clase.nombre,[Validators.required]),
          
          'familia': this.myControlFamilia
        });
        
       
      }
      else{
        this.form= new FormGroup({
          'id': new FormControl(0),
          'nombre': new FormControl('',[Validators.required]),
          'estado': new FormControl('',[Validators.required]),
          'familia': this.myControlFamilia
        });
        
    
      }
      this.familiaFiltrados$ = this.myControlFamilia.valueChanges.pipe(map(val => this.filtrarFamilia(val)));
    
  }
  LLENARCAMPO(familia:Familia){
    this.myControlFamilia= new FormControl(familia,[Validators.required]);
  }
  filtrarFamilia(val: any) {
    if (val != null && val.idFamilia > 0) {
      return this.familias.filter(option =>
        option.nombre.toLowerCase().includes(val.nombre.toLowerCase()) );
    } else {
      return this.familias.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarFamilia(val: any) {
    return val ? `${val.nombre} ` : val;
  }
  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let clasefinal = new Clase();

      clasefinal.idClase = this.form.value['id'];    
      clasefinal.nombre = this.form.value['nombre'];
      let familiaupdate= new Familia();
      familiaupdate.idFamilia=this.form.value['familia'].idFamilia;
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
