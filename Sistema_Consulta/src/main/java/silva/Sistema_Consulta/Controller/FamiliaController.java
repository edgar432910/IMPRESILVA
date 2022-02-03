package silva.Sistema_Consulta.Controller;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import silva.Sistema_Consulta.Model.Familia;
import silva.Sistema_Consulta.Service.IFamiliaService;
import silva.Sistema_Consulta.dto.FamiliaDTO;
import silva.Sistema_Consulta.exception.ModeloNotFoundException;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/Familia")
public class FamiliaController {

    @Autowired
    private IFamiliaService service ;

    @Autowired
    private ModelMapper mapper;




    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }

    @GetMapping
    //@RequestMapping(value = "/" , method = RequestMethod.GET)
    public ResponseEntity<List<FamiliaDTO> >listar() throws Exception {
        List<FamiliaDTO> lista = service.listar().stream().map(p -> mapper.map(p, FamiliaDTO.class)).collect(Collectors.toList());


        return new ResponseEntity<>(lista, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<FamiliaDTO> listarPorId(@PathVariable("id") Integer id) throws Exception {
        Familia obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }

        FamiliaDTO dto = mapper.map(obj, FamiliaDTO.class);

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Void> registrar(@Valid @RequestBody FamiliaDTO dto) throws Exception {
        Familia p = mapper.map(dto, Familia.class);
        Familia obj = service.registrar(p);

        //localhost:8080/Familias/5
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdFamilia()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping
    public ResponseEntity<FamiliaDTO> modificar(@Valid @RequestBody FamiliaDTO dto) throws Exception {
        Familia obj = service.listarPorId(dto.getIdFamilia());

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + dto.getIdFamilia());
        }

        Familia p = mapper.map(dto, Familia.class);
        Familia pac = service.modificar(p);
        FamiliaDTO dtoResponse = mapper.map(pac, FamiliaDTO.class);
        return new ResponseEntity<>(dtoResponse, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
        Familia obj = service.listarPorId(id);

        if(obj == null) {
            throw new ModeloNotFoundException("ID NO ENCONTRADO " + id);
        }
        service.eliminar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


//    @GetMapping("/{id}")
//    Usuario GetOne(@PathVariable Integer id){
//
//        return usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//
//
//    }
//
//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping()
//    Usuario Create(@RequestBody @Validated UsuarioDTO usuarioDTO){
//        Usuario usuario= new ModelMapper().map(usuarioDTO, Usuario.class);
//        return  usuarioRepository.save(usuario);
//    }
//
//    @PutMapping("/{id}")
//    Usuario Update(@PathVariable Integer id, @RequestBody UsuarioDTO usuarioDTO){
//        Usuario usuario = usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//        new  ModelMapper().map(usuarioDTO,usuario);
//        return  usuarioRepository.save(usuario);
//    }
//
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    @DeleteMapping("/{id}")
//    void Delete(@PathVariable Integer id){
//        Usuario usuario= usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//        usuarioRepository.delete(usuario);
//    }
}
