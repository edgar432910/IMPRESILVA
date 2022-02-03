package silva.Sistema_Consulta.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Familia;
import silva.Sistema_Consulta.Repository.FamiliaRepository;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Service.IFamiliaService;

@Service
public class FamiliaServiceImpl extends  CRUDImpl<Familia, Integer> implements IFamiliaService {

    @Autowired
    private FamiliaRepository repo;


    @Override
    protected IGenericRepo<Familia, Integer> getRepo() {
        return repo;
    }
}
