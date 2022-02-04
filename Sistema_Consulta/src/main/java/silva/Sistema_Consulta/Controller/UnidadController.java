package silva.Sistema_Consulta.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Unidad;
import silva.Sistema_Consulta.Service.IUnidadService;
import silva.Sistema_Consulta.dto.UnidadDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Unidad")
public class UnidadController {
    @Autowired
    private IUnidadService service ;

    @Autowired
    private ModelMapper mapper;
    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }

    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<UnidadDTO>> listar() throws Exception {
        List<UnidadDTO> lista = service.listar().stream().map(p -> mapper.map(p, UnidadDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<UnidadDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Unidad obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        UnidadDTO dto = mapper.map(obj, UnidadDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody UnidadDTO dto) throws Exception {
        Unidad p = mapper.map(dto, Unidad.class);
        Unidad obj = service.registrar(p);

        //localhost:8080/Unidads/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdUnidad()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<UnidadDTO> modificar(@Valid @RequestBody UnidadDTO dto) throws Exception {
        Unidad obj = service.listarPorId(dto.getIdUnidad());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdUnidad());
        }

        Unidad p = mapper.map(dto, Unidad.class);
        Unidad pac = service.modificar(p);
        UnidadDTO dtoResponse = mapper.map(pac, UnidadDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Unidad obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
