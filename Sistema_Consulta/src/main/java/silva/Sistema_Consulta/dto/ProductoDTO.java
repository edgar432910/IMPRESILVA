package silva.Sistema_Consulta.dto;

import lombok.Data;
import silva.Sistema_Consulta.Model.*;

import javax.validation.constraints.NotNull;

@Data
public class ProductoDTO {

    private Integer idProducto;

    @NotNull

    private String codigo1;
    @NotNull
    private String codigo2;

    private String codigo3;
    private String codigo4;

    @NotNull
    private String nombre1;

    private String nombre2;

    @NotNull
    private String factura1;

    @NotNull
    private String factura2;

    private String factura3;
    @NotNull
    private Integer costo;

    private String pais;

    @NotNull
    private String monedaid;

    @NotNull
    private ProveedorDTO proveedor;
    @NotNull
    private ClaseDTO clase;
    @NotNull
    private MarcaDTO marca;
    @NotNull
    private UnidadDTO unidad;
    @NotNull
    private MarcaVehiculoDTO marcavehiculo;

    @NotNull
    private MonedaDTO moneda;









}
