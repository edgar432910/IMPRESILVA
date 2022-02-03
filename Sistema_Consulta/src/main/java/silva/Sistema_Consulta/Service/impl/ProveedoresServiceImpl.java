package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Proveedores;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.ProveedoresRepository;

@Service
public class ProveedoresServiceImpl extends CRUDImpl<Proveedores,Integer>{

    @Autowired
    private ProveedoresRepository repo;

    @Override
    protected IGenericRepo<Proveedores, Integer> getRepo() {
        return repo;
    }
}
