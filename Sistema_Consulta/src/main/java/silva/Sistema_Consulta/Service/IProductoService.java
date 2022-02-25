package silva.Sistema_Consulta.Service;

import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.dto.SearchProductoDTO;

import java.util.List;

public interface IProductoService extends ICRUD<Producto, Integer>{
    List<Producto> SeachProducto (SearchProductoDTO search) throws Exception;

}
