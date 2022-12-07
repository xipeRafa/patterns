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
    notify(dataArr){ // en notify tenemos el array de funciones recorriendolos y ejecutando refresh
        console.log('observerArr:', this.observersArr)
        console.log('this.dataArr:', this.dataArr)

        this.observersArr.forEach(observer=>{
            observer.refresh(dataArr) // manda el dataTyped a refresh de cada observador
        })
    }
}


class Observer{  
    constructor(fn){
        this.fn = fn
    }
    refresh(dataTyped){
       this.fn(dataTyped)
    }
}



const instSubject = new Subject()

function change(){
    instSubject.notify(idMyText.value)
}


const instObserver1 = new Observer((dataTyped)=>{
    /* console.log("Hola soy el observador 1 " + dataTyped) */
})

const instObserver2 = new Observer((dataTyped)=>{
    idDiv1.innerHTML = dataTyped
    /* console.log("Hola soy el observador 2 " + dataTyped) */
})

const instObserver3 = new Observer((dataTyped)=>{
    idDiv2.innerHTML = dataTyped.split("").reverse().join("")
    /* console.log("Hola soy el observador 3 " + dataTyped) */
})


instSubject.subscribe(instObserver1)
instSubject.subscribe(instObserver2)
instSubject.subscribe(instObserver3)

