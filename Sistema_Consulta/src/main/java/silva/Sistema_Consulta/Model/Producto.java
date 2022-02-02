package silva.Sistema_Consulta.Model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="Producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idProducto;


    private String codAlterno;

    private String codOriginal;
    private String descripcion;
    private String estado;

    @ManyToOne
    @JoinColumn(name = "id_tipoproducto",referencedColumnName = "idTipoproducto")

    private TipoProducto tipoProducto;


    @ManyToOne
    @JoinColumn(name = "id_unidad",referencedColumnName = "idUnidad")
    private Unidad unidad;

    @ManyToOne
    @JoinColumn(name = "id_clase",referencedColumnName = "idClase")
    private Clase clase;

    @ManyToOne
    @JoinColumn(name = "id_marca",referencedColumnName = "idMarca")
    private Marca marca;



    private String moneda;
    private String Pais;
    private String Proveedor;

    private String Costo;

    private String facturanumero;
    private String fechafactura;
    private String tercero;

    private String marcavehiculo;

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
