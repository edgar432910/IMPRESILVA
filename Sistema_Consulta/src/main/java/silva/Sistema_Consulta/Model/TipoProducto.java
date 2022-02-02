package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class TipoProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idTipoproducto;

    private String nombre;


}
