package silva.Sistema_Consulta.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import silva.Sistema_Consulta.Model.Familia;
import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.dto.SearchProductoDTO;

import java.util.List;

public interface IProductoService extends ICRUD<Producto, Integer>{
    List<Producto> SeachProducto (SearchProductoDTO search) throws Exception;
    Page<Producto> listarPageable(Pageable page);

}
