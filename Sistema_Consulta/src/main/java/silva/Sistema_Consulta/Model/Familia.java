package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name="Familia")
public class Familia {
    @Id
    @Column(name = "Fam_Codigo")
    private String id;
    @Column(name = "Fam_Nombre")
    private String Nombre;
    @Column(name = "Fam_Orden")
    private String Orden;
    @Column(name = "Fam_Estado")
    private String Estado;

    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "familia")
    private List<Clase> clases;


    //C mayusca es _
//    private LocalDateTime fechaCreacion;
//
//
//    private LocalDateTime fechaActualizacion;
//
//    @PrePersist
//    private void asignarFechaCreacion(){
//        fechaCreacion=LocalDateTime.now();
//    }
//    @PreUpdate
//    private void  asignarFechaUpdate(){
//        fechaActualizacion=LocalDateTime.now();
//    }
}
