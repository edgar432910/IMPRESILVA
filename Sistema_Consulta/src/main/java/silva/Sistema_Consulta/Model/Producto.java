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


    private String codigo1;
    private String codigo2;
    private String codigo3;
    private String codigo4;
    private String nombre1;
    private String nombre2;
    private String factura1;
    private String factura2;
    private String factura3;
    private Integer costo;
    private String pais;


    private boolean estado;


    @ManyToOne
    @JoinColumn(name = "id_proveedor",referencedColumnName = "idProveedor", foreignKey = @ForeignKey(name = "fk_proveedor"))
    private Proveedor Proveedor;

    @ManyToOne
    @JoinColumn(name = "id_clase",referencedColumnName = "idClase",  foreignKey = @ForeignKey(name = "fk_clase"))
    private Clase clase;

    @ManyToOne
    @JoinColumn(name = "id_marca",referencedColumnName = "idMarca", foreignKey = @ForeignKey(name = "fk_marca"))
    private Marca marca;

    @ManyToOne
    @JoinColumn(name = "id_unidad",referencedColumnName = "idUnidad",  foreignKey = @ForeignKey(name = "fk_unidad"))
    private Unidad unidad;

    @ManyToOne
    @JoinColumn(name = "id_marca_vehiculo", referencedColumnName = "idMarcaVehiculo", foreignKey = @ForeignKey(name = "fk_marcavehiculo"))
    private MarcaVehiculo marcavehiculo;

    @ManyToOne
    @JoinColumn(name = "id_moneda", referencedColumnName = "idMoneda", foreignKey = @ForeignKey(name = "fk_moneda"))
    private Moneda moneda;

    private String monedaid;









    //C mayusca es _
    private LocalDateTime fechaCreacion;

    private LocalDateTime fechaActualizacion;


    @PrePersist
    private void asignarFechaCreacion(){
        fechaCreacion=LocalDateTime.now();
    }
    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }






}
