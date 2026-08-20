function ObtenerProductos() {
    fetch("http://localhost:5050/api/Producto")
        .then((respuesta) => respuesta.json())
        .then((data) => {console.log(data);
            mostrarProducto(data);
        })
        .catch((error) => {
            console.log(error);
        });
      
        }
    function mostrarProducto(data) 
    {

    const tbody = document.getElementById("tablaProducto");
    tbody.innerHTML = "";
        
     data.forEach((element) => {
       let tr = tbody.insertRow();

       tr.insertCell(0).innerHTML = element.nombre;

       tr.insertCell(1).innerHTML = element.descripcion;

       tr.insertCell(2).innerHTML = element.precioCosto;

       tr.insertCell(3).innerHTML = element.precioVenta;
     });
      
    }

      ObtenerProductos();

    
