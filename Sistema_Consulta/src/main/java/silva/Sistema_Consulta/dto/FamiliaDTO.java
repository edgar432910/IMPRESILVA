package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
@Data
public class FamiliaDTO {


    private Integer idFamilia;
    @NotBlank
    private String nombre;

    @NotBlank
    private String orden;

    @NotBlank
    private String estado;
}
