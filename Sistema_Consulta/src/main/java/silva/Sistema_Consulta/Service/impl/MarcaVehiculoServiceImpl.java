package silva.Sistema_Consulta.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.MarcaVehiculo;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.MarcaVehiculoRepository;
import silva.Sistema_Consulta.Service.IMarcaVehiculoService;

@Service
public class MarcaVehiculoServiceImpl extends CRUDImpl<MarcaVehiculo, Integer> implements IMarcaVehiculoService {

    @Autowired
    private MarcaVehiculoRepository repo;


    @Override
    protected IGenericRepo<MarcaVehiculo, Integer> getRepo() {
        return repo;
    }

}
