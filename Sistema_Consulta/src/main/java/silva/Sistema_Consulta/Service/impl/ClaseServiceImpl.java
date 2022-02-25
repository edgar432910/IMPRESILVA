package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Repository.ClaseRepository;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Service.IClaseService;
import silva.Sistema_Consulta.dto.ClaseDTO;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Service
public class ClaseServiceImpl extends CRUDImpl<Clase, Integer> implements IClaseService {
    @Autowired
    private ClaseRepository repo;

    @Autowired
    private EntityManager em;



    @Override
    protected IGenericRepo<Clase, Integer> getRepo() {
        return repo;
    }

    @Override
    public List<Clase> BuscarClase() throws Exception {

        // cr consulta

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Clase> consulta = cb.createQuery(Clase.class);
        Root<Clase> clases = consulta.from(Clase.class);

        List<Predicate> searchCriterias = new ArrayList<>();

        searchCriterias.add(cb.like(clases.get("nombre"),"%"+"clase"+"%"));

        searchCriterias.add(cb.like(clases.get("familia").get("nombre"),"%"+"Familia3"+"%"));

        consulta.select(clases).where(cb.and(searchCriterias.toArray(new Predicate[searchCriterias.size()])));



        return  em.createQuery(consulta).getResultList();
    }
}
