package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.ProductoRepository;

@Service
public class ProductoServiceImpl  extends CRUDImpl<Producto, Integer>{

    @Autowired
    private ProductoRepository repo;

    @Override
    protected IGenericRepo<Producto, Integer> getRepo() {
        return null;
    }
}
