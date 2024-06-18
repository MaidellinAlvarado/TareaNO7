// objeto
let punto={
    x:0,
    y:0
}

function moverPunto (dx,dy){
    this.x =+x;
    this.y =+y;

this.mover=function(dx,dxy){
    this.x=+dx;
    this.y=+dy;
}

}




// call

moverPunto.call(punto, 2,3)

//usando el metodo mover
punto.mover(3,2)
console.log("x:", miPunto.x);
console.log("y:", miPunto.y);



//2 EJERCICIO

let punto1={
    x:0,
    y:0
}


function extenderPunto (punto1){


 this. dibujar=function() {
    console.log("Se esta dibujando las coordenadas");

 };
 
 this.mover=function (dx,dy){

    this.x+=dx;
    this.y+=dy;

 };

this.informar=function (){
    console.log("Coordenadas actuales del punto:");
    console.log("X:", this.x);
    console.log("Y:", this.y);
};
}

extenderPunto.call(punto1);
punto1.dibujar()
punto1.mover(3,2)
punto1.informar()



