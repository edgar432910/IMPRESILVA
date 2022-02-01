package silva.Sistema_Consulta.Controller.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

public class UsuarioDTO {
    @NotBlank
    @Size(min=3, max = 100)
    private String titulo;

    @NotBlank
    private String slug;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String rutaPortada;
    @NotBlank
    private String rutaArchivo;

    @NotNull
    @PositiveOrZero
    private Float precio;
}
