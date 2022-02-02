package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Data
@Entity
@Table(name="Clase")
public class Clase{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Cla_Codigo")
    private Integer id;

    @Column(name = "Cla_Nombre")
    private String Nombre;

    @ManyToOne
    @JoinColumn(name = "Cla_CodFamilia",referencedColumnName = "Fam_Codigo")
    private Familia familia;

    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "clase")
    private List<Producto> productos;


    @Column(name = "Cla_Orden")
    private String Orden;
    @Column(name = "Cla_Estado")
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
