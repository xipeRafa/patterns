class ClientComponentData{ // component
    constructor(url){
        this.url = url
    }
    async getData(){
        const res = await fetch(this.url)
        const data = await res.json()
        return data.slice(0,2)
    }
}
class ClientDecorator{ // decorator
    constructor(clientComponentData){
        this.clientComponentData = clientComponentData
    }
    async getData(){
        return await this.clientComponentData.getData()
    }
}
class UpperCaseClientDecorator extends ClientDecorator{ // decorator 1
    async getData(){
        const data = await super.getData()
        const titlesUppeCase = data.map(el=>{
            el.title = el.title.toUpperCase()
            return el
        })
        return titlesUppeCase
    }
}
class HtmlClientDecorator extends ClientDecorator{ // decorator 2
    async getData(){
        const data = await super.getData()
        const newData = data.map(el=>{
            el.title = `<h1>${el.title}</h1>`
            el.thumbnailUrl = `<img src='${el.thumbnailUrl}'>`
            return el
        })
        return newData
    }
}

(async () => {
    const url = "https://jsonplaceholder.typicode.com/photos"
    const instClient = new ClientComponentData(url)
    const data = await instClient.getData()
    console.log(data)

    const instUpperClient = new UpperCaseClientDecorator(instClient)
    const data2 = await instUpperClient.getData()
    console.log(data2)

    const instHTMLClient = new HtmlClientDecorator(instUpperClient)
    const data3 = await instHTMLClient.getData()
    idDiv1.innerHTML = data3.reduce((ac, el)=>{
        return ac + el.title + el.thumbnailUrl
    },"")

    const instHTMLClient2 = new HtmlClientDecorator(instClient)
    const data4 = await instHTMLClient2.getData()
    idDiv2.innerHTML = data4.reduce((ac, el)=>{
        return ac + el.title + el.thumbnailUrl
    },"")

})()