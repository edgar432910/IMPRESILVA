package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.MarcaVehiculo;
import silva.Sistema_Consulta.Service.IMarcaVehiculoService;
import silva.Sistema_Consulta.dto.MarcaVehiculoDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/MarcaVehiculo")
public class MarcaVehiculoController {
    @Autowired
    private IMarcaVehiculoService service ;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }

    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<MarcaVehiculoDTO>> listar() throws Exception {
        List<MarcaVehiculoDTO> lista = service.listar().stream().map(p -> mapper.map(p, MarcaVehiculoDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<MarcaVehiculoDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        MarcaVehiculo obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        MarcaVehiculoDTO dto = mapper.map(obj, MarcaVehiculoDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody MarcaVehiculoDTO dto) throws Exception {
        MarcaVehiculo p = mapper.map(dto, MarcaVehiculo.class);
        MarcaVehiculo obj = service.registrar(p);

        //localhost:8080/MarcaVehiculos/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdMarcaVehiculo()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<MarcaVehiculoDTO> modificar(@Valid @RequestBody MarcaVehiculoDTO dto) throws Exception {
        MarcaVehiculo obj = service.listarPorId(dto.getIdMarcaVehiculo());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdMarcaVehiculo());
        }

        MarcaVehiculo p = mapper.map(dto, MarcaVehiculo.class);
        MarcaVehiculo pac = service.modificar(p);
        MarcaVehiculoDTO dtoResponse = mapper.map(pac, MarcaVehiculoDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        MarcaVehiculo obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
