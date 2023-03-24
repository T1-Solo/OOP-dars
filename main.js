// class Filters {
//     constructor(array , max){
//         this.array = array
//         this.max = max
//     }
//     get FullName(){
//         return this.array
//     }
//     set FullName(value){
//         this.array = value
//     }
// }
// const Filters_2 = new  Filters([10,20,30,40,50])
// const  max = Math.max(...Filters_2.array)
// const min = Math.min(...Filters_2.array)
// Filters_2.FullName = [max , min]
// console.log(Filters_2)

function Extents(name,age) {
    return {
        name : name,
        age :age
    }
}
const result = Extents("Ikrom" , 14)
const result_2 = Extents("Ulugbek" , 16)
class OOP {
    constructor(name,age){
        this.name = name 
        this.age = age
    }
}
const OOP_2 = new OOP("Ikrom",14)
class OOP_2_CLASS extends OOP{
    constructor(name, age ,job ){
        super(name,age)
        this.name = name
        this.age = age
        this.job = job
    }
}
const OOP_2_CLASS_object = new OOP_2_CLASS("Doston" , 16 , "Peschi")
console.log(OOP_2_CLASS_object)
class OOP_3 extends OOP_2_CLASS{
    constructor(name,age , job , tel){
        super(name, age , job)
        this.name = name
        this.age  = age
        this.job = job
        this.tel = tel  
    }
}
const result_3 = new OOP_3("Messi" , 16 , "Football player" , "9008080890")
console.log(result_3);

//OOP getter setter
class Get_Set{
    name = "Ikrom"
    get FullName(){
        this.name
    }
    set FullName(value){
        this.name = value
    }
}
const Get_Set_2 = new Get_Set()
Get_Set_2.FullName = "Salom"
console.log(Get_Set_2);

class Names {
    constructor(nameArray, max_name){
        this.nameArray = nameArray
        this.max_name = max_name   
    }
    
}