package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idProveedor;

    private String ruc;

    private String razonsocial;


    private String contribuyente;
    private String nombrecomercial;
    private LocalDateTime fechaInscripcion;
    private LocalDateTime fechaActualizacion;

    private String departamento;

    private String provincia ;
    private String distrito;
    private String direccion;
    private String telefono;


    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }
    @PrePersist
    private void asignarFechaCreacion(){
        fechaInscripcion=LocalDateTime.now();
    }


}
