package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data

public class MonedaDTO {
    private Integer idMoneda;

    @NotBlank
    private String nombre ;


}
