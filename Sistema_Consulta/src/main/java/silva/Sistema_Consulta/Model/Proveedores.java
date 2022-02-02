package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
public class Proveedores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idProveedores;

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


}
