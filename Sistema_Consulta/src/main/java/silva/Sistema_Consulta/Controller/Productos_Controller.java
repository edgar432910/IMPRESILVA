package silva.Sistema_Consulta.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/productos")
public class Productos_Controller {
    public Productos_Controller(){

    }

    @GetMapping("/prueba")
    String Prueba (@RequestParam(defaultValue = "Nombre defaul") String nombre){
        return  "Hola "+ nombre;
    }
}
