package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="Unidad")
public class Unidad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Und_Codigo")
    private Integer id;
    @Column(name = "Und_Nombre")
    private String Nombre;


    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "Pro_Codigo", cascade = CascadeType.ALL)
    private List<Producto> productos;


}
