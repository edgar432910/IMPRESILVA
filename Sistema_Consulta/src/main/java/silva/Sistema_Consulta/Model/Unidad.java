package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="Unidad")
public class Unidad {
    @Id
    @Column(name = "Und_Codigo")
    private String id;
    @Column(name = "Und_Nombre")
    private String Nombre;


    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "unidad")
    private List<Producto> productos;


}
