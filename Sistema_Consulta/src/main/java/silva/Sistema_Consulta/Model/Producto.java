package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idProducto;


    private String codAlterno;

    private String codOriginal;
    private String descripcion;
    @Column(name = "estado", nullable = false)
    private boolean enabled;

//    @ManyToOne
//    @JoinColumn(name = "id_tipoproducto",referencedColumnName = "idTipoproducto",  foreignKey = @ForeignKey(name = "FK_Producto_TipoProducto"))
//
//    private TipoProducto tipoProducto;


    @ManyToOne
    @JoinColumn(name = "id_unidad",referencedColumnName = "idUnidad",  foreignKey = @ForeignKey(name = "FK_Producto_Unidad"))
    private Unidad unidad;

    @ManyToOne
    @JoinColumn(name = "id_clase",referencedColumnName = "idClase",  foreignKey = @ForeignKey(name = "FK_Producto_Clase"))
    private Clase clase;

    @ManyToOne
    @JoinColumn(name = "id_marca",referencedColumnName = "idMarca", foreignKey = @ForeignKey(name = "FK_Producto_Marca"))
    private Marca marca;

    private String moneda;
    private String Pais;

    @ManyToOne
    @JoinColumn(name = "id_proveedor",referencedColumnName = "idProveedor", foreignKey = @ForeignKey(name = "FK_Producto_Proveedores"))
    private Proveedor Proveedor;

    @ManyToOne
    @JoinColumn(name = "id_marca_vehiculo", referencedColumnName = "idMarcaVehiculo", foreignKey = @ForeignKey(name = "FK_Producto_MarcaVehiculo"))
    private MarcaVehiculo marcavehiculo;

    private String Costo;

    private String facturanumero;
    private String fechaIngreso;
    private String tercero;



    //C mayusca es _
    private LocalDateTime fechaCreacion;

    private LocalDateTime fechaActualizacion;

    private String ganancia;

    @PrePersist
    private void asignarFechaCreacion(){
        fechaCreacion=LocalDateTime.now();
    }
    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }






}
