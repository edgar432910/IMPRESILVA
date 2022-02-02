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

    private Integer idMarca;


    private String nombre;


    private String orden;

    private String estado;



}
