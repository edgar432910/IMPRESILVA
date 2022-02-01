package silva.Sistema_Consulta.Controller;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import silva.Sistema_Consulta.Controller.dto.UsuarioDTO;
import silva.Sistema_Consulta.Model.Usuario;
import silva.Sistema_Consulta.Repository.UsuarioRepository;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/admin/usuarios")
public class Usuario_Controller {

    private final UsuarioRepository usuarioRepository;


    public Usuario_Controller(UsuarioRepository usuarioRepository){
        this.usuarioRepository=usuarioRepository;
    }

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }
    @GetMapping("")
    Page<Usuario> GetALL(@PageableDefault(sort="nombres",size=5) Pageable pageable){
        return usuarioRepository.findAll(pageable);
    }
    @GetMapping("/{id}")
    Usuario GetOne(@PathVariable Integer id){

        return usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);


    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    Usuario Create(@RequestBody @Validated UsuarioDTO usuarioDTO){
        Usuario usuario= new ModelMapper().map(usuarioDTO, Usuario.class);
        return  usuarioRepository.save(usuario);
    }

    @PutMapping("/{id}")
    Usuario Update(@PathVariable Integer id, @RequestBody UsuarioDTO usuarioDTO){
        Usuario usuario = usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        new  ModelMapper().map(usuarioDTO,usuario);
        return  usuarioRepository.save(usuario);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void Delete(@PathVariable Integer id){
        Usuario usuario= usuarioRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        usuarioRepository.delete(usuario);
    }

}
