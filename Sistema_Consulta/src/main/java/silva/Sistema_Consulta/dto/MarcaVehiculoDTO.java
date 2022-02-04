package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class MarcaVehiculoDTO {

    private Integer idMarcaVehiculo;

    @NotBlank
    private String nombre;
    @NotBlank
    private String estado;

}
