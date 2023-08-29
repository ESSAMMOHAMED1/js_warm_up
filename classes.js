///main class
class Car{
    constructor(){
this.color = "red"
}    
 log_color(){
    console.log(this.color);
}
}
///creat a new class
const bmw = new Car;
bmw.log_color();
//inheretance
class tyota extends Car{
    name ="tyota";
    log_name(){
       console.log( this.name);
    }
}

//creat a new class from extended class 
const toy = new tyota;
toy.log_name;