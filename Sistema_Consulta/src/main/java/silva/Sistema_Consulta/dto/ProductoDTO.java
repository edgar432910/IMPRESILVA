package silva.Sistema_Consulta.dto;

import silva.Sistema_Consulta.Model.*;

import javax.validation.constraints.NotNull;

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
    private Clase clase;
    @NotNull
    private Marca marca;
    @NotNull
    private String moneda;
    @NotNull
    private String Pais;
    @NotNull
    private silva.Sistema_Consulta.Model.Proveedor Proveedor;
    @NotNull
    private String Costo;
    @NotNull
    private String facturanumero;
    @NotNull
    private String fechafactura;
    @NotNull
    private String tercero;




}
