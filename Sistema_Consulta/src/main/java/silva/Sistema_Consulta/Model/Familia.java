package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Familia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idFamilia;

    private String nombre;

    private String orden;

    private String estado;




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
