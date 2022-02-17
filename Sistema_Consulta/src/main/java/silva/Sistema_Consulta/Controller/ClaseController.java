package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Clase;
import silva.Sistema_Consulta.Service.IClaseService;
import silva.Sistema_Consulta.dto.ClaseDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Clase")

public class ClaseController {

    @Autowired
    private IClaseService service ;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }


    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<ClaseDTO>> listar() throws Exception {
        List<ClaseDTO> lista = service.listar().stream().map(p -> mapper.map(p, ClaseDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ClaseDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Clase obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        ClaseDTO dto = mapper.map(obj, ClaseDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody ClaseDTO dto) throws Exception {
        Clase p = mapper.map(dto, Clase.class);
        Clase obj = service.registrar(p);

        //localhost:8080/Clases/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdClase()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<ClaseDTO> modificar(@Valid @RequestBody ClaseDTO dto) throws Exception {
        Clase obj = service.listarPorId(dto.getIdClase());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdClase());
        }

        Clase p = mapper.map(dto, Clase.class);
        Clase pac = service.modificar(p);
        ClaseDTO dtoResponse = mapper.map(pac, ClaseDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Clase obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Clase>> Buscar() throws Exception {


        List<Clase> lista= service.BuscarClase();
        System.out.println( lista);
        return new ResponseEntity<>(lista, HttpStatus.OK);
    }


}
