package silva.Sistema_Consulta.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import silva.Sistema_Consulta.Model.Producto;

public interface ProductoRepository extends IGenericRepo<Producto,Integer> {
//    @Modifying
//    @Query(value = "INSERT INTO consulta_examen(id_consulta, id_examen) VALUES (:idConsulta, :idExamen)", nativeQuery = true)
//    Integer Buscar(@Param("idConsulta") Integer idConsulta, @Param("idExamen") Integer idExamen);
}
