package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Marca;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.MarcaRepository;
import silva.Sistema_Consulta.Service.IMarcaService;

@Service
public class MarcaServiceImpl extends  CRUDImpl<Marca,Integer> implements IMarcaService {

    @Autowired
    private MarcaRepository repo;


    @Override
    protected IGenericRepo<Marca, Integer> getRepo() {
        return repo;
    }
}
