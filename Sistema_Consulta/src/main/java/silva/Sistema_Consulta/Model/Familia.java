package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="Familia")
public class Familia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Fam_Codigo")
    private Integer id;
    @Column(name = "Fam_Nombre")
    private String Nombre;
    @Column(name = "Fam_Orden")
    private String Orden;
    @Column(name = "Fam_Estado")
    private String Estado;


    //C mayusca es _
    private LocalDateTime fechaCreacion;


    private LocalDateTime fechaActualizacion;

    @PrePersist
    private void asignarFechaCreacion(){
        fechaCreacion=LocalDateTime.now();
    }
    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }
}
