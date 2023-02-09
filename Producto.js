class Producto {
    constructor(id = null, name = null, description = null, price= null, available_quantity= null, ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price= price;
        this.available_quantity = available_quantity;
    }
    setId(id){
        this.id = id; 
    }
    setName(name){
        this.name = name;
    }
    setDescription(description){
        this.description= description;
    }
    setPrice(price){
        this.price = price ;
    }
    setAvailable_quantity(available_quantity){
        this.available_quantity = available_quantity;
    }
    
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getAvailable_quantity(){
        return this.available_quantity;
    }
   

}