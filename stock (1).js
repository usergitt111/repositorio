class Stock {
    constructor(stockList = []) {
        this.stock = stockList;
    }
    setStock (stockList) {
        this.stock = stock;
    }
    getStock(){
        return this.stock;
    }
    getStockById(id) {
        let selected =  null;
        let i = 0;
        while (selected == null){
            if(this.stock[i].id == id){
                selected = this. stock[i];
            }
            i++
        }
        return selected;
    }
    createProducto(newProducto){
        this.stock.push(newProducto);
    }
    updateStock (Producto, id){
        let selected = this.getStockById(id)
        selected.name = producto.getName();
        selected.description = producto.getDescription();
        selected.price = producto.getPrice();
        selected.available_quantity= producto.getAvailable_quantity();
        this.inscription.splice(id, 1, selected);
    }
    deleteStock(id){
        let index = this.getIndexById(id);
        this.inscription.splice(index, 1);
    }
    getIndexById (id){
        let i = 0;
        while (i<this.stock.length){
            if(this.stock[i].id == id) {
                break;
            }
            i++
        }
        if (i == this.stock.length) {
            i = -1;
        }
        return;
    }
}