package silva.Sistema_Consulta.dto;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ClaseDTO {

    private Integer idClase;
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
