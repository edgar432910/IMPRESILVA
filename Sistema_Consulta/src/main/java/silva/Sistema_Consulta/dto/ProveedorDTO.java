package silva.Sistema_Consulta.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class ProveedorDTO {

    private Integer idProveedor;
    @NotNull
    private String ruc;
    @NotNull
    private String razonsocial;

    @NotNull
    private String nombrecomercial;

    @NotNull
    private String departamento;
    @NotNull
    private String provincia ;
    @NotNull
    private String distrito;
    @NotNull
    private String direccion;
    @NotNull
    private String telefono;

}
