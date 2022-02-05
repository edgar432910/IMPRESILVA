package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Proveedor;
import silva.Sistema_Consulta.Service.IClaseService;
import silva.Sistema_Consulta.Service.IProveedoresService;
import silva.Sistema_Consulta.dto.ProveedorDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Proveedor")
public class ProveedorController {

    @Autowired
    private IProveedoresService service ;

    @Autowired
    private ModelMapper mapper;

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }

    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<ProveedorDTO>> listar() throws Exception {
        List<ProveedorDTO> lista = service.listar().stream().map(p -> mapper.map(p, ProveedorDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProveedorDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Proveedor obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        ProveedorDTO dto = mapper.map(obj, ProveedorDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody ProveedorDTO dto) throws Exception {
        Proveedor p = mapper.map(dto, Proveedor.class);
        Proveedor obj = service.registrar(p);

        //localhost:8080/Proveedors/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProveedor()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<ProveedorDTO> modificar(@Valid @RequestBody ProveedorDTO dto) throws Exception {
        Proveedor obj = service.listarPorId(dto.getIdProveedor());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdProveedor());
        }

        Proveedor p = mapper.map(dto, Proveedor.class);
        Proveedor pac = service.modificar(p);
        ProveedorDTO dtoResponse = mapper.map(pac, ProveedorDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Proveedor obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
