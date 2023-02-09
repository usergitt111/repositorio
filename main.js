let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", saveProducto);
let producto= new Producto();
let stock = new Stock;
let id = 1;
let add = true;
let idSeleccionado = null;


function saveProducto(){
    let productoName = document.getElementById("name").value;
    let productoDescription = document.getElementById("description").value;
    let productoPrice = document.getElementById("price").value;
    let productoAvailable_quantity = document.getElementById("available_quantity").value;
    


    if(productoName == "" || productoDescription== "" || productoAvailable_quantity == "" || productoPrice == ""){
        alert("Hay campos obligatorios vacios")
        return false;
    }

    if(add == true){
        let newProducto= new Producto ();

        newProducto.setId(id);
        newProducto.setName(productoName);
        newProducto.setDescription(productoDescription);
        newProducto.setPrice(productoPrice);
        newProducto.setAvaileble_quantity(productoAvailable_quantity);
        
        id = id + 1;

        stock.createProducto(newProducto)
        updateStock();
        
        clear();

    }else{

        
        let selected = stock.getStockById(idSeleccionado);
        selected.name = productoName;
        selected.description = productoDescription;
        selected.price = productoPrice;
        selected.available_quantity = studentAge;
        stock.updateStock(selected,idSeleccionado);

        updateStock();

        clear();
    }
};

//la funcion tiene un error,modifica y crea, no lo pude resolver  
function updateStock(){
    let bodyTable = document.getElementById("tbody");
    let listaActualizada =stock.getStock();
    let contenidoDeLaTabla = '';
    for (let index = 0; index < listaActualizada.length; index++) {
        const inscripto = listaActualizada[index];
        contenidoDeLaTabla += `
        <tr>
            <th scope="row">${inscripto.getName()}</th>
            <td>${inscripto.getDescription()}</td>
            <td>${inscripto.getPrice()}</td>
            <td>${inscripto.getAvailable_quantity()}</td>
          
                <button class="btn btn-warning" onclick="getById(${inscripto.getId()})">
                    Modificar
                </button>
                <button class="btn btn-danger" onclick="getById(${inscripto.getId()})">
                    Eliminar
                </button>
        </tr>
        `;
    }
    bodyTable.innerHTML = contenidoDeLaTabla;
}
function deleteStock(id){
    inscripto.deleteStock(id);   
    updateStock();
}
function clear() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("available_quantity").value = "";
    

}


function getById(id) {
    let selected = inscription.getInscriptionById(id);
    document.getElementById("name").value = selected.getName();
    document.getElementById("description").value = selected.getDescription();
    document.getElementById("price").value = selected.getPrice();
    document.getElementById("available_quantity").value = selected.getAvailable_quantity();

    // deshabilito el modo agregar
    add = false;

    // guardo el id del registro
    idSeleccionado = id;

}