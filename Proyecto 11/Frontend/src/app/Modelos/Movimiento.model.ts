export class MovimientoModel {
    constructor(
        public IdMovimiento: string,
        public FechaMovimientoFormateada: string,
        public SolicitanteEquipo: string,
        public CorreoSolicitante: string,
        public TelefonoSolicitante: string,
        public CantidadProducto: string,
        public DescripcionMovimiento: string, 
        public IdProductoMateriaPrima: string,  
        public NombreProducto: string,
        public NombreUsuario: string,
        public TipoMovimiento: string
    ) {}
}
