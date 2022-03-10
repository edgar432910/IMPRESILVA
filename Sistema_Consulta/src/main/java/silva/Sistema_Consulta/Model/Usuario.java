package silva.Sistema_Consulta.Model;



import lombok.Data;

import javax.persistence.*;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUsuario;

    @Column(name = "nombre", nullable = false, unique = true)
    private String username;

    @Column(name = "clave", nullable = false)
    private String password;

    @Column(name = "estado", nullable = false)
    private boolean enabled;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_rol", joinColumns = @JoinColumn(name = "id_usuario", referencedColumnName = "idUsuario"), inverseJoinColumns = @JoinColumn(name = "id_rol", referencedColumnName = "idRol"))
    private List<Rol> roles;


    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_act")
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
