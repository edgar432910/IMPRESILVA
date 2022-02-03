package silva.Sistema_Consulta.exception;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ExceptionResponse {
    private LocalDateTime fecha;
    private String mensaje;
    private String detalles;

    public ExceptionResponse() {
    }

    public ExceptionResponse(LocalDateTime fecha, String mensaje, String detalles) {
        this.fecha = fecha;
        this.mensaje = mensaje;
        this.detalles = detalles;
    }
}
