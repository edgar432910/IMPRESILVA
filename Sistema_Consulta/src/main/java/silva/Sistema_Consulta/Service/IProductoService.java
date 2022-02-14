package silva.Sistema_Consulta.Service;

import silva.Sistema_Consulta.Model.Producto;

import java.util.List;

public interface IProductoService extends ICRUD<Producto, Integer>{
    List<Producto> BuscarProducto(String a) throws Exception;

}
