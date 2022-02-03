package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Proveedor;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.ProveedoresRepository;
import silva.Sistema_Consulta.Service.IProveedoresService;

@Service
public class ProveedoresServiceImpl extends CRUDImpl<Proveedor,Integer> implements IProveedoresService {

    @Autowired
    private ProveedoresRepository repo;

    @Override
    protected IGenericRepo<Proveedor, Integer> getRepo() {
        return repo;
    }
}
