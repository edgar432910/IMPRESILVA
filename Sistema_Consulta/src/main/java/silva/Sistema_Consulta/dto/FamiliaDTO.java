package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
public class FamiliaDTO {


    private Integer idFamilia;
    @NotBlank
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
