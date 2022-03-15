package silva.Sistema_Consulta.Service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import silva.Sistema_Consulta.Model.Menu;
import silva.Sistema_Consulta.Model.Rol;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.IRolRepo;
import silva.Sistema_Consulta.Service.IMenuService;
import silva.Sistema_Consulta.Service.IRolService;

public class RolServiceImpl extends CRUDImpl<Rol, Integer> implements IRolService {
    @Autowired
    private IRolRepo repo;

    @Override
    protected IGenericRepo<Rol, Integer> getRepo() {
        return repo;
    }
}
