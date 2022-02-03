package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.ProductoRepository;
import silva.Sistema_Consulta.Service.IProductoService;

@Service
public class ProductoServiceImpl  extends CRUDImpl<Producto, Integer>implements IProductoService {

    @Autowired
    private ProductoRepository repo;

    @Override
    protected IGenericRepo<Producto, Integer> getRepo() {
        return null;
    }
}
