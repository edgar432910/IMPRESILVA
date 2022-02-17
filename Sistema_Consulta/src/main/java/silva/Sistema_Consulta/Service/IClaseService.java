package silva.Sistema_Consulta.Service;

import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.dto.ClaseDTO;

import java.util.List;

public interface IClaseService extends ICRUD<Clase, Integer> {

    List<Clase> BuscarClase() throws Exception;

}
