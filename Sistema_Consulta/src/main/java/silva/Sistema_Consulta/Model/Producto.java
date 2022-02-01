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
    @Column(name = "Pro_Codigo")
    private Integer id;

    @Column(name = "Pro_Codigo2")
    private String Cod_Alterno;

    @Column(name = "Pro_Nombre1_1")
    private String Cod_Original;
    @Column(name = "Pro_Nombre2_2")
    private String Descripcion;
    @Column(name = "Pro_Estado")
    private String Estado;

    @ManyToOne
    @JoinColumn(name = "Pro_CodTipo",referencedColumnName = "Tip_Codigo")
    private TipoProducto tipoProducto;
//    @ManyToOne
//    @JoinColumn(name = "Cla_CodFamilia",referencedColumnName = "Fam_Codigo")
//    private Familia familia;
    @ManyToOne
    @JoinColumn(name = "Pro_CodUnidad",referencedColumnName = "Und_Codigo")
    private Unidad unidad;

    @ManyToOne
    @JoinColumn(name = "Pro_CodClase",referencedColumnName = "Cla_Codigo")
    private Clase clase;

    @ManyToOne
    @JoinColumn(name = "Pro_CodMarca",referencedColumnName = "Mar_Codigo")
    private Marca marca;


    @Column(name = "Pro_CodMoneda")
    private String Moneda;
    @Column(name = "Pro_CodPais")
    private String Pais;
    @Column(name = "Pro_CodProveedor")
    private String Proveedor;

    @Column(name = "Pro_Costo")
    private String Costo;

    @Column(name = "Pro_Modelo1")
    private String FacturaNumero;
    @Column(name = "Pro_Modelo2")
    private String FechaFactura;
    @Column(name = "Pro_Modelo3")
    private String Tercero;
    @Column(name = "Pro_CodMarVehiculo")
    private String MarcaVehiculo;

    //C mayusca es _
    @Column(name = "Pro_FechaCreacion")
    private LocalDateTime fechaCreacion;

    @Column(name = "Pro_FechaEdicion")
    private LocalDateTime fechaActualizacion;

    @Column(name = "Pro_AdiCosto")
    private String Ganancia;

    @PrePersist
    private void asignarFechaCreacion(){
        fechaCreacion=LocalDateTime.now();
    }
    @PreUpdate
    private void  asignarFechaUpdate(){
        fechaActualizacion=LocalDateTime.now();
    }






}
