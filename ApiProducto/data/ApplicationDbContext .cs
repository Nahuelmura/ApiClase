using Microsoft.EntityFrameworkCore;
using ApiProducto.Models;
using ApiProducto.Data;

namespace ApiProducto.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Producto> Productos { get; set; } 
   
}
