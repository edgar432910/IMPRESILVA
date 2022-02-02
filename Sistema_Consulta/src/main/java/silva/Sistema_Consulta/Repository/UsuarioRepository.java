package silva.Sistema_Consulta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import silva.Sistema_Consulta.Model.Usuario;

public interface UsuarioRepository  extends JpaRepository<Usuario,Integer> {
}
