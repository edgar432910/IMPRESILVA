package silva.Sistema_Consulta.dto;

import silva.Sistema_Consulta.Model.Usuario;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

public class UsuarioDTO {
    private Integer idUsuario;
    @NotBlank
    private String nombres;

    @NotBlank
    private String apellidos;

    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    @Size(min=3, max = 100)
    private String password;

    @NotNull
    private Usuario.Rol rol;

}
