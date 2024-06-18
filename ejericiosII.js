function sumarPuntos( punto1, punto2){


punto1.sumar = function(puntoResultante) {
    this.x += puntoResultante.x;
    this.y += puntoResultante.y;
};


punto1.sumar.aplly(punto1, [punto2]);

}



let punto1 = {
    x: 5,
    y: 5
  };

  let punto2={
    x:3,
    y:5
  }


  sumarPuntos(punto1, punto2);
  console.log("Coordenadas de punto1 después de sumar con punto2:");
  console.log("X:", punto1.x);
  console.log("Y:", punto1.y);



  //EJERCICIO 2

  function puntoMasLejano(puntos) {
    // Función para calcular la distancia al origen de un punto
    function distanciaAlOrigen(punto) {
        return Math.hypot(punto.x, punto.y);
    }


    // Encontrar el punto más lejano al origen usando apply
    let puntoMasLejano = puntos[0];
    let distanciaMasLejana = distanciaAlOrigen(puntos[0]);
    for (let i = 1; i < puntos.length; i++) {
        let distancia = distanciaAlOrigen(puntos[i]);
        if (distancia > distanciaMasLejana) {
            puntoMasLejano = puntos[i];
            distanciaMasLejana = distancia;
        }
    }
  
  
    // Mostrar el punto más lejano en la consola
    console.log("El punto más lejano al origen es:", puntoMasLejano);
    return puntoMasLejano;
  
    
  
  }


  let puntos = [{x: 1, y: 2}, {x: -3, y: 4}, {x: 5, y: -6}];
puntoMasLejano.apply(null, [puntos]);
