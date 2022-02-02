package silva.Sistema_Consulta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import silva.Sistema_Consulta.Model.Producto;

public interface ProductoRepository extends JpaRepository<Producto,Integer> {
}
