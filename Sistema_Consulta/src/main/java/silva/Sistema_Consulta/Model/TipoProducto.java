package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="TipoProducto")
public class TipoProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Tip_Codigo")
    private Integer id;
    @Column(name = "Tip_Nombre")
    private String Nombre;

    //no tiene un id relacionado, se necesita declarar la propiedad
    @OneToMany(mappedBy = "Pro_CodTipo")
    private List<Producto> productos;
}
