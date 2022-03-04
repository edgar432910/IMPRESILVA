package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name="marca")
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMarca;


    private String nombre;


    private boolean estado;


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
