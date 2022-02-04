package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Marca;
import silva.Sistema_Consulta.Service.IMarcaService;
import silva.Sistema_Consulta.dto.MarcaDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Marca")
public class MarcaController {
    @Autowired
    private IMarcaService service ;

    @Autowired
    private ModelMapper mapper;



    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }


    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<MarcaDTO>> listar() throws Exception {
        List<MarcaDTO> lista = service.listar().stream().map(p -> mapper.map(p, MarcaDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<MarcaDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Marca obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        MarcaDTO dto = mapper.map(obj, MarcaDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody MarcaDTO dto) throws Exception {
        Marca p = mapper.map(dto, Marca.class);
        Marca obj = service.registrar(p);

        //localhost:8080/Marcas/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdMarca()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<MarcaDTO> modificar(@Valid @RequestBody MarcaDTO dto) throws Exception {
        Marca obj = service.listarPorId(dto.getIdMarca());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdMarca());
        }

        Marca p = mapper.map(dto, Marca.class);
        Marca pac = service.modificar(p);
        MarcaDTO dtoResponse = mapper.map(pac, MarcaDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Marca obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
