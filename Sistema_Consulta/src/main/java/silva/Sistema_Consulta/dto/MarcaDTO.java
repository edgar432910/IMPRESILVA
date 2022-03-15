package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
@Data
public class MarcaDTO {

    private Integer idMarca;

    @NotBlank
    private String nombre;




}
