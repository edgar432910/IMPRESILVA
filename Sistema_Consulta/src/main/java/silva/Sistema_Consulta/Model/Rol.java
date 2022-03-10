package silva.Sistema_Consulta.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "rol")
@Data
public class Rol {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idRol;

	@Column(name = "nombre", nullable = false, length = 15)
	private String nombre;

	@Column(name = "descripcion", nullable = true, length = 150)
	private String descricpion;

}
