package silva.Sistema_Consulta.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

public class FamiliaDTO {



    @NotBlank
    private String nombre;

    @NotBlank
    private String orden;

    @NotBlank
    private String estado;
}
