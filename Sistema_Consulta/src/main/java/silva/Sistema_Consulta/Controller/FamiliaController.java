package silva.Sistema_Consulta.Controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import silva.Sistema_Consulta.Model.Familia;
import silva.Sistema_Consulta.Model.Usuario;
import silva.Sistema_Consulta.Repository.FamiliaRepository;

import javax.persistence.EntityExistsException;

@RestController
@RequestMapping("/api/admin/Familia")
public class FamiliaController {

    private final FamiliaRepository familiaRepository;

    public FamiliaController(FamiliaRepository familiaRepository){
        this.familiaRepository=familiaRepository;

    }

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }

    @GetMapping("")
    Page<Familia> GetALL(@PageableDefault(size=500) Pageable pageable){
        return familiaRepository.findAll(pageable);
    }
    @GetMapping("/{id}")
    Familia GetOne(@PathVariable Integer id){
        return  familiaRepository.findById(id).orElseThrow(EntityExistsException::new);
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
