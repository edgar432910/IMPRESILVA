package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Menu;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.IMenuRepo;
import silva.Sistema_Consulta.Service.IMenuService;

import java.util.List;

@Service
public class MenuServiceImpl extends CRUDImpl<Menu, Integer> implements IMenuService {

	@Autowired
	private IMenuRepo repo;

	@Override
	protected IGenericRepo<Menu, Integer> getRepo() {
		return repo;
	}
	
	@Override
	public List<Menu> listarMenuPorUsuario(String nombre) {
		/*List<Menu> menus = new ArrayList<>();
		repo.listarMenuPorUsuario(nombre).forEach(x -> {
			Menu m = new Menu();
			m.setIdMenu((Integer.parseInt(String.valueOf(x[0]))));
			m.setIcono(String.valueOf(x[1]));
			m.setNombre(String.valueOf(x[2]));
			m.setUrl(String.valueOf(x[3]));		
			
			menus.add(m);
		});
		return menus;*/
		return repo.listarMenuPorUsuario(nombre);
	}

}
