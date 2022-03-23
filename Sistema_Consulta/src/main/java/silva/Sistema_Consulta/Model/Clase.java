package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Data
@Entity
public class Clase{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idClase;

    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_familia",referencedColumnName = "idFamilia", foreignKey = @ForeignKey(name = "fk_familia"))
    private Familia familia;


    private float utilidad;


    @Column(name = "estado", nullable = false)
    private boolean enabled;



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
