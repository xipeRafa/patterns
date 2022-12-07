class Subject{
    constructor(){
        this.observersArr = [] // array de funciones (observadores)
    }
    subscribe(observer){
        this.observersArr.push(observer)
    }
    unsubscribe(observer){
        this.observersArr = this.observersArr.filter(obs => obs !== observer)
    }
    notify(dataArr){ // notify resive los datos a refresacar
        console.log('observerArr:', this.observersArr)
        console.log('this.dataArr:', this.dataArr)

        this.observersArr.forEach(observer=>{// en notify tenemos el array de funciones Observadoras recorriendolos y ejecutando refresh
            observer.refresh(dataArr) // manda el dataTyped a la funcion refresh de cada observador
        })
    }
}



class extSubject extends Subject{
    constructor(){
        super()
        this.dataArr = []   // this.dataArr: (3) ['aaaaa', 'aaaaa', 'aaaaa'] array a Visualizar en view
    }
    add(newArrItem){
        this.dataArr.push(newArrItem)
        super.notify(this.dataArr) // al notify se le manda la informacion a refescar
    }
}

class HtmlElementByIdObserver {
    constructor(elementeHTML){
        this.elementeHTML = elementeHTML
    }
    refresh(dataTyped){   // cada observer tiene la funcion refresh --- recive el dataType desde notify()
        this.elementeHTML.innerHTML = dataTyped.reduce((acc, el)=>{
            return acc + `<p>${el}</p>`
        }, "")
    }
}



const instExtSubject = new extSubject()

function add(){
    instExtSubject.add(idTxtName.value)
}



const instDivHTML = new HtmlElementByIdObserver(idDiv1)

instExtSubject.subscribe(instDivHTML)



//Comportamientos singulares a cada observador

class Observer{
    constructor(fn){
        this.fn = fn
    }
    refresh(dataTyped){ // las funciones con refresh son observadores
        this.fn(dataTyped)
    }
}

const instObserver = new Observer((dataTyped)=>{
    idDiv2.innerHTML = dataTyped.length
})

instExtSubject.subscribe(instObserver)










