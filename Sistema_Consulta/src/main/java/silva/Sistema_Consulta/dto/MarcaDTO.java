package silva.Sistema_Consulta.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class MarcaDTO {

    @NotBlank
    private String nombre;

    @NotNull
    @NotBlank
    private String orden;
    @NotNull
    @NotBlank
    private String estado;

}
