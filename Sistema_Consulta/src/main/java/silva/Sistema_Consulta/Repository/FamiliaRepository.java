package silva.Sistema_Consulta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import silva.Sistema_Consulta.Model.Familia;

public interface FamiliaRepository  extends JpaRepository<Familia,Integer> {
}
