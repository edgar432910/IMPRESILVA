package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Model.Producto;
import silva.Sistema_Consulta.Service.IProductoService;
import silva.Sistema_Consulta.dto.FamiliaDTO;
import silva.Sistema_Consulta.dto.ProductoDTO;
import silva.Sistema_Consulta.dto.SearchProductoDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Producto")
public class ProductoController {

    @Autowired
    private IProductoService service ;

    @Autowired
    private ModelMapper mapper;


    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }


    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<ProductoDTO>> listar() throws Exception {
        List<ProductoDTO> lista = service.listar().stream().map(p -> mapper.map(p, ProductoDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    @PreAuthorize("@authServiceImpl.tieneAcceso('listar')")
    public ResponseEntity<ProductoDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Producto obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        ProductoDTO dto = mapper.map(obj, ProductoDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    @PreAuthorize("@authServiceImpl.tieneAcceso('listar')")
    public ResponseEntity<Void> registrar(@Valid @RequestBody ProductoDTO dto) throws Exception {
        Producto p = mapper.map(dto, Producto.class);
        Producto obj = service.registrar(p);

        //localhost:8080/Productos/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProducto()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<ProductoDTO> modificar(@Valid @RequestBody ProductoDTO dto) throws Exception {
        Producto obj = service.listarPorId(dto.getIdProducto());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdProducto());
        }

        Producto p = mapper.map(dto, Producto.class);
        Producto pac = service.modificar(p);
        ProductoDTO dtoResponse = mapper.map(pac, ProductoDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Producto obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Producto>> Buscar(@RequestBody SearchProductoDTO searchProductoDTO) throws Exception {


        List<Producto> lista= service.SeachProducto(searchProductoDTO);
        System.out.println( lista);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/pageable")
    public ResponseEntity<Page<ProductoDTO>> listarPageable(Pageable page) throws Exception {
        Page<ProductoDTO> productos= service.listarPageable(page).map(p -> mapper.map(p, ProductoDTO.class));


        return new ResponseEntity<>(productos,HttpStatus.OK);
    }
}
