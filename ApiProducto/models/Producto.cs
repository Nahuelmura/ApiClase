using System.ComponentModel.DataAnnotations;

namespace ApiProducto.Models;

public class Producto
{

    [Key]
    public int ProductoID { get; set; }
    public string? Nombre { get; set; }
    public string?  Descripcion { get; set; }
    public decimal? PrecioCosto { get; set; }
    public decimal? PrecioVenta { get; set; }

}
