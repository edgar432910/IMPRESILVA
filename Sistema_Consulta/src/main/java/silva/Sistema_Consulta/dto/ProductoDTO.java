package silva.Sistema_Consulta.dto;

import lombok.Data;
import silva.Sistema_Consulta.Model.*;

import javax.validation.constraints.NotNull;

@Data
public class ProductoDTO {

    private Integer idProducto;
    @NotNull
    private String codAlterno;

    @NotNull
    private String codOriginal;
    @NotNull
    private String descripcion;
    @NotNull
    private Unidad unidad;

    @NotNull
    private ClaseDTO clase;
    @NotNull
    private MarcaDTO marca;
    @NotNull
    private ProveedorDTO proveedor;
    @NotNull
    private MarcaVehiculoDTO vehiculo;

    @NotNull
    private String moneda;
    @NotNull
    private String pais;

    @NotNull
    private String Costo;
    @NotNull
    private String facturanumero;
    @NotNull
    private String fechafactura;
    @NotNull
    private String tercero;
    @NotNull
    private String ganancia;





}
