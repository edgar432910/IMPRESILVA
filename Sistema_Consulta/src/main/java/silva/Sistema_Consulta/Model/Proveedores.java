package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
@Table(name="Proveedores$")
public class Proveedores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODIGO")
    private Integer id;
    @Column(name = "NumeroRuc")
    private String ruc;

    private String RazonSocial;

    @Column(name = "[Tipo de Contribuyente]")
    private String contribuyente;
    @Column(name = "[Nombre Comercial]")
    private String nombreComercial;
    @Column(name = "[Fecha de Inscripcion]")
    private LocalDateTime fechaInscripcion;
    @Column(name = "Fecha_AcT")
    private LocalDateTime fechaActualizacion;
    @Column(name = "Departamento")
    private String departamento;
    @Column(name = "Provincia")
    private String provincia ;
    @Column(name = "Distrito")
    private String distrito;
    @Column(name = "Direccion")
    private String direccion;
    @Column(name = "Telefono")
    private String numero;


    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }


}
