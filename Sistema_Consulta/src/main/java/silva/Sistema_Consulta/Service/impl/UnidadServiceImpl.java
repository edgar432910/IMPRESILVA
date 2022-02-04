package silva.Sistema_Consulta.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Unidad;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.UnidadRepository;
import silva.Sistema_Consulta.Service.ICRUD;
import silva.Sistema_Consulta.Service.IUnidadService;

@Service
public class UnidadServiceImpl extends CRUDImpl<Unidad,Integer> implements IUnidadService {

    @Autowired
    private UnidadRepository repo;


    @Override
    protected IGenericRepo<Unidad, Integer> getRepo() {
        return repo;
    }
}
