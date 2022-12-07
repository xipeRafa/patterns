class ProductComponentName{ // component
    constructor(name){
        this.name = name
    }
    getDetail(){
        return `${this.name}`
    }
}
class ProductDecorator{ // decorator
    constructor(productComponentName){ // clase de arriba
        this.productComponentName = productComponentName
    }
    getDetail(){ // metodo con el mismo nombre de arriba
        return this.productComponentName.getDetail()
    }
}
class CommercialInfoProductDecorator extends ProductDecorator{ // decorator 1 clase que hereda de decorador
    constructor(productComponentName, tradename, brand){
        super(productComponentName)    
        this.tradename = tradename
        this.brand = brand 
    }
    getDetail(){
        return `1.- ${this.productComponentName.name} ${this.tradename} ${this.brand} `+ super.getDetail()
    }
}
class StoreProductDecorator extends ProductDecorator{ // decorator 2
    constructor(productComponentName, price){
        super(productComponentName)      
        this.price = price    
    }
    getDetail(){
        return super.getDetail() + ` price: $ ${this.price}`
    }
}

class HTMLProductDecorator extends ProductDecorator{ // decorator 3
    getDetail(){
        return `<h1>Información del producto</h1> <p>${super.getDetail()}</p>`
    }
}


const instProductComponentName = new ProductComponentName("Cerveza")    // Ejecución // component
console.log(instProductComponentName.getDetail())

const instCommercialInfoProduct = new CommercialInfoProductDecorator( instProductComponentName, "2.- London", "3.- Fuller's")// decorator 1 
console.log(instCommercialInfoProduct.getDetail())

const instStoreProduct = new StoreProductDecorator(instProductComponentName, 15.5) // decorator 2 con component
console.log(instStoreProduct.getDetail())

const instProduct = new StoreProductDecorator(instCommercialInfoProduct, 15.5)// decorator 2 con decorator 1
console.log(instProduct.getDetail())

const htmlProductDecorator = new HTMLProductDecorator(instProduct) // decorator 3 con decorator 2 con decorator 1
myDiv.innerHTML = htmlProductDecorator.getDetail()

