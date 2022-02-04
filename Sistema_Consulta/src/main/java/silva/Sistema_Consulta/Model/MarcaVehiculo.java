package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name="marca_vehiculo")
public class MarcaVehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idMarcaVehiculo;

    private String nombre;

    private String estado;

}
