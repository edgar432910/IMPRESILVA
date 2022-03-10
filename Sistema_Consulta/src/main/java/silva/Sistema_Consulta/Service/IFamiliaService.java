package silva.Sistema_Consulta.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import silva.Sistema_Consulta.Model.Familia;

public interface IFamiliaService extends  ICRUD<Familia,Integer>{

    Page<Familia> listarPageable(Pageable page);

}
