package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Repository.ClaseRepository;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Service.IClaseService;

@Service
public class ClaseServiceImpl extends CRUDImpl<Clase, Integer> implements IClaseService {
    @Autowired
    private ClaseRepository repo;

    @Override
    protected IGenericRepo<Clase, Integer> getRepo() {
        return repo;
    }
}