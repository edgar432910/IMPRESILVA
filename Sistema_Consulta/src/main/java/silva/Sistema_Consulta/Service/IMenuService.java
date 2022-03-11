package silva.Sistema_Consulta.Service;


import silva.Sistema_Consulta.Model.Menu;

import java.util.List;

public interface IMenuService extends ICRUD<Menu, Integer>{
	
	List<Menu> listarMenuPorUsuario(String nombre);

}
