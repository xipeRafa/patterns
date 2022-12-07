Proxys
const person = {
    name:'meme',
    lastName:'mujata',
    age:0,
}

const handlerProxy ={
    set(obj,prop,value){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`la propiedad ${prop} no existe en el objeto persona`)
        }

         if((prop === "name" || prop === "lastName")&&
          !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(value))
           ){
             return console.error(`la propiedad ${prop} solo acepta letras y espacios vacios`)
         }   
        obj[prop]=value
    }
}

const jon = new Proxy(person,handlerProxy)

jon.name=90
jon.name="kokoko09"
jon.email="koko"
mapas===============================================================================================================================================================================================================================================================================================================================================================================================================



let mapa = new Map()

mapa.set('name',`rio`)mapa.set('name2’,`rio2`)mapa.sizemapa.has(`name`)
mapa.get(`name`)mapa.delete(`name`)let keysArr = []
let valuesArr = []

for(let [key,value] of mapa){
    keysArr.push(key)
    valuesArr.push(value)
}
mapa.keys()
  //MapIterator {'name', 'name2'}

mapa.values()
  //MapIterator {'rio', 'rio2'}


let mapa2 = new Map([
    [`name`,`meme`],
    [`name2`,`meme2`],
    [`name3`,`meme3`],
    [`name4`,`meme4`]
])

const keysMapa2 = […mapa2.keys()]const valuesMapa2 = […mapa2.values()]


===============================================================================================================================================================================================================================================================================================================
const setArr = new Set([1,2,3,3,3,true,{},{},'hola','HOLA'])
setArr.size
setArr.add(222)

for(let item of setArr){
    console.log(item)
}

setArr.forEach(el=> console.log(el))

let tt = Array.from(setArr)


set.delete(3)
set.has(3)
set.clear()
let duplicado = […new Set(Arr)]


===============================================================================================================================================================================================================================================================================================================

const ws = new WeakSet()

let obj1 = {'aa':11}
let obj2 = {'bb':22}
let obj3 = {'cc':33}

ws.add(obj1)
ws.add(obj2)
ws.add(obj3)

ws.has(obj1)
ws.delete(obj2)

===============================================================================================================================================================================================================================================================================================================


const wm = new WeakMap()

let key1 = {}
let key2 = {}

wm.set(key1,'value1')
wm.set(key2,'value2')

ws.has(obj1)
ws.delete(obj2)
wm.get(key1)































