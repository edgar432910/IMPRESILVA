package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UnidadDTO {
    private Integer idUnidad;
    @NotBlank
    private String nombre;
}
