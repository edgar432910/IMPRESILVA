package silva.Sistema_Consulta.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/Marca")
public class MarcaController {

    public MarcaController(){

    }

    @GetMapping("/prueba")
    String Prueba(@RequestParam(defaultValue = "Valordefecto") String nombre){
        return  "Hola "+ nombre;
    }
}
