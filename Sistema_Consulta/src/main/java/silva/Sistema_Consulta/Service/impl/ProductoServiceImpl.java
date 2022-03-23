package silva.Sistema_Consulta.Service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Model.Familia;
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


        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Producto> consulta = cb.createQuery(Producto.class);
        Root<Producto> productos = consulta.from(Producto.class);

        List<Predicate> searchCriterias = new ArrayList<>();
        if((search.getCodigo1()!="")&&(search.getCodigo1()!=null)){
            searchCriterias.add(cb.like(productos.get("codigo1"),"%"+search.getCodigo1()+"%"));

        }

        if((search.getCodigo2()!="") && (search.getCodigo2()!= null)){
            searchCriterias.add(cb.like(productos.get("codigo2"),"%"+search.getCodigo2()+"%"));
        }
        if((search.getNombre1()!="")&&(search.getNombre1()!=null)){
            searchCriterias.add(cb.like(productos.get("nombre1"),"%"+search.getNombre1()+"%"));

        }
        if((search.getNombre2()!="")&&(search.getNombre2()!=null)){
            searchCriterias.add(cb.like(productos.get("nombre2"),"%"+search.getNombre2()+"%"));

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




        return  em.createQuery(consulta).getResultList();


    }

    @Override
    public Page<Producto> listarPageable(Pageable page) {
        return repo.findAll(page);
    }

}
