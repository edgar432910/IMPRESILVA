package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="Marca")
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Mar_Codigo")
    private Integer id;
    @Column(name = "Mar_Nombre")
    private String Nombre;

    @Column(name = "Mar_Orden")
    private String Orden;
    @Column(name = "Mar_Estado")
    private String Estado;

    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "Pro_CodMarca")
    private List<Producto> productos;

}
