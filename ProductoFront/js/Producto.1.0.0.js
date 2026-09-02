function ObtenerProductos() {
  fetch("http://localhost:5050/api/Producto")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      mostrarProducto(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function mostrarProducto(data) {
  const tbody = document.getElementById("tablaProducto");
  tbody.innerHTML = "";

  data.forEach((element) => {
    let tr = tbody.insertRow();

    tr.insertCell(0).innerHTML = element.nombre; // insertamos en celda

    tr.insertCell(1).innerHTML = element.descripcion;

    tr.insertCell(2).innerHTML = element.precioCosto;

    tr.insertCell(3).innerHTML = element.precioVenta;

    let editar = document.createElement("button"); // creamos el boton
    editar.textContent = "Editar"; // texto del boton
    editar.classList.add("btn", "btn-primary"); // agregamos clases

    editar.setAttribute(
      "onclick",
      `BuscarValoreProducto(${element.productoID})`,
    );

    let tdEditar = tr.insertCell(4);
    tdEditar.appendChild(editar); // inserta el boton editar en la celda
  });
}

function AgregarProducto() {
  var nuevoProducto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precioCosto: parseFloat(document.getElementById("precioCosto").value),
    precioVenta: parseFloat(document.getElementById("precioVenta").value),
  };

  fetch("http://localhost:5050/api/Producto", {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(nuevoProducto),
  })
    .then((respuesta) => respuesta.json())

    .then(() => {
      document.getElementById("nombre").value = "";
      document.getElementById("descripcion").value = "";
      document.getElementById("precioCosto").value = "";
      document.getElementById("precioVenta").value = "";
      ObtenerProductos();
    });
}

function BuscarValoreProducto(id) {
  fetch(`http://localhost:5050/api/Producto/${id}`)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log("Producto:", data);

      document.getElementById("idEditar").value = data.productoID;
      document.getElementById("nombreEditar").value = data.nombre;
      document.getElementById("descripcionEditar").value = data.descripcion;
      document.getElementById("precioCostoEditar").value = data.precioCosto;
      document.getElementById("precioVentaEditar").value = data.precioVenta;

      let modal = new bootstrap.Modal(document.getElementById("modalProducto"));

      modal.show();
    })
    .catch((error) => {
      console.error("No se pudo acceder a la API:", error);
    });
}




ObtenerProductos();
