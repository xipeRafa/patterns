class Singleton {
     constructor() {
        this.random = Math.random();
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    static getInstance() {
        return Singleton.instance;
    }

}

let singleton = new Singleton();
let singleton2 = new Singleton();

console.log(singleton.random);
console.log(singleton2.random);

// EJEMPLO práctico --------------------------------------

class WeekDays{
    constructor(lang){
        this.lang = lang;
        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this; // si no existe lo creamos  
    }

    daysEs = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
    daysEn = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    getDays(){
        return this.lang === "es" ? this.daysEs : this.daysEn;
    }
}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays();
console.log(weekDays.getDays());
console.log(weekDays2.getDays());


