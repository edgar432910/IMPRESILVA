package silva.Sistema_Consulta.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ClaseDTO {

    @NotBlank
    private String nombre;

    @NotBlank
    @NotNull
    private FamiliaDTO familia;

    @NotBlank
    private String orden;

    @NotBlank
    private String estado;


}
