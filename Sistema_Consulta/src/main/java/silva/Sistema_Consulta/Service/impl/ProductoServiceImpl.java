package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.Repository.IGenericRepo;
import silva.Sistema_Consulta.Repository.ProductoRepository;
import silva.Sistema_Consulta.Service.IProductoService;
import silva.Sistema_Consulta.dto.SearchProductoDTO;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductoServiceImpl  extends CRUDImpl<Producto, Integer>implements IProductoService {

    @Autowired
    private ProductoRepository repo;
    @Autowired
    private EntityManager em;

    @Override
    protected IGenericRepo<Producto, Integer> getRepo() {
        return repo;
    }




    @Override
    public List<Producto> SeachProducto(SearchProductoDTO search) throws Exception {
        // cr consulta

//        private String codAlterno;
//        private String codOriginal;
//        private String descripcion;
//
//
//        private String marca;
//        private String clase;
//
//        private String marcavehiculo;

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Producto> consulta = cb.createQuery(Producto.class);
        Root<Producto> productos = consulta.from(Producto.class);

        List<Predicate> searchCriterias = new ArrayList<>();
        if((search.getCodAlterno()!="")&&(search.getCodAlterno()!=null)){
            searchCriterias.add(cb.like(productos.get("codAlterno"),"%"+search.getCodAlterno()+"%"));

        }

        if((search.getCodOriginal()!="") && (search.getCodOriginal()!= null)){
            searchCriterias.add(cb.like(productos.get("codOriginal"),"%"+search.getCodOriginal()+"%"));
        }
        if((search.getDescripcion()!="")&&(search.getDescripcion()!=null)){
            searchCriterias.add(cb.like(productos.get("descripcion"),"%"+search.getDescripcion()+"%"));

        }
        if((search.getMarca()!="")&&(search.getMarca()!=null)){
            searchCriterias.add(cb.like(productos.get("marca").get("nombre"),"%"+search.getMarca()+"%"));

        }
        if((search.getClase()!="")&&(search.getClase()!=null)){
            searchCriterias.add(cb.like(productos.get("clase").get("nombre"),"%"+search.getClase()+"%"));

        }
        if((search.getMarcavehiculo()!="")&&(search.getMarcavehiculo()!=null)){
            searchCriterias.add(cb.like(productos.get("marcavehiculo").get("nombre"),"%"+search.getMarcavehiculo()+"%"));

        }




        consulta.select(productos).where(cb.and(searchCriterias.toArray(new Predicate[searchCriterias.size()])));


// tmr quiero hablar lo hago un dto? para recibir o sea si hay uno jaja mira ta feo


        return  em.createQuery(consulta).getResultList();


    }
}
