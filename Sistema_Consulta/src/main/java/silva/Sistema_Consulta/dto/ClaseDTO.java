package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
@Data
public class ClaseDTO {

    private Integer idClase;
    @NotBlank
    private String nombre;


    @NotNull
    private FamiliaDTO familia;

    @NotBlank
    private float utilidad;



}
