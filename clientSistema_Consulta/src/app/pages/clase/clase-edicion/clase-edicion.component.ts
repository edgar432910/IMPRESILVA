import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Clase } from 'src/app/_model/clase';
import { Familia } from 'src/app/_model/familia';
import { ClaseService } from 'src/app/_service/clase.service';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-clase-edicion',
  templateUrl: './clase-edicion.component.html',
  styleUrls: ['./clase-edicion.component.css']
})
export class ClaseEdicionComponent implements OnInit {


  
  filteredOptions: Observable<Familia[]>;
  O_Familia = new FormControl();
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup;
  familias:Familia[];
  constructor(   
    private route: ActivatedRoute,
    private router: Router,
    private fb:FormBuilder,

    private claseService:ClaseService,
    private familiaService:FamiliaService
    ) { }

  ngOnInit(): void {

     this.familiaService.listar().subscribe(data =>{
      this.familias=data;
    });

    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'estado': new FormControl(''),
      'orden': new FormControl(''),
      'familia': new FormControl('')

    });
    

    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });

  }

  initForm(){
    this.filteredOptions= this.O_Familia.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
     )

    if (this.edicion) {

      
     
      this.claseService.listarPorId(this.id).subscribe(data => {
       
        this.form = new FormGroup({
          'id': new FormControl(data.idClase),
          'nombre': new FormControl(data.nombre),
        
        
          'familia':new FormControl(data.familia.idFamilia)
        });
        
      });
    }
    

  }
  private _filter(value: any): Familia[]{
    console.log(value)    
    return this.familias.filter(option => option.nombre.includes(value));
  }

  operar(){
    let clase = new Clase();

      clase.idClase = this.form.value['id'];    
      clase.nombre = this.form.value['nombre'];

    
      clase.familia=this.form.value['familia'];
      

      if(this.edicion){
        let familiaupdate= new Familia();
        familiaupdate.idFamilia=this.form.value['familia'];
        clase.familia=familiaupdate;

        this.claseService.modificar(clase).subscribe(()=>{
          this.claseService.listar().subscribe((data=>{
            this.claseService.claseCambio.next(data);
            this.claseService.mensajeCambio.next('Se actualizo')
          }))
        })
      }else{
        this.claseService.registrar(clase).subscribe(()=>{
          this.claseService.listar().subscribe((data=>{
            this.claseService.claseCambio.next(data);
            this.claseService.mensajeCambio.next('Se registro')
          }))
        })

      }
    this.router.navigate(['/pages/clase']);
      
    }






}
