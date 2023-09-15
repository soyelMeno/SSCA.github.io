
document.addEventListener('DOMContentLoaded',llenar)
const mostrador = document.getElementById('mostrador')
const cars = `[
    {"tag":"MPFM1",
    "serie":"129.456",
    "status":"Operativo",
    "asignado":"Pablo Vargas",
    "imagen":"./img/g1.jpg",
    "fecha":"12-9-23",
    "ultimaNota":"El equipo está listo para ser usado"},
    {"tag":"MPFM2",
    "serie":"3456.6543",
    "status":"No Operativo",
    "asignado":"Luis Melo",
    "imagen":"./img/g1.jpg",
    "fecha":"12-9-23",
    "ultimaNota":"El equipo no cuenta con fuente gamma"},
    {"tag":"MPFM3",
    "serie":"179.2412",
    "status":"Disponible",
    "asignado":"Activo Fijo",
    "imagen":"./img/g1.jpg",
    "fecha":"12-9-23",
    "ultimaNota":"Fallo en el puerto COM2"}
  ]`
   // console.log(typeof cars)//String
    const objeto = JSON.parse(cars)
   // console.log(typeof objeto)
   // console.log(objeto[0].asignado)
function llenar(){
    console.log('llenar')
    let queryBuilder = `<div class= "row flex">`
    for (i=0;i<objeto.length;i++){
      queryBuilder+=`
      <div class="card col-5" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${objeto[0].imagen}" class="img-fluid rounded-start" alt="${objeto[0].imagen}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${objeto[i].tag}</h5>
                  <p class="card-text">${objeto[i].ultimaNota}</p>
                  <p class="card-text"><small class="text-muted">${objeto[i].asignado}</small></p>
                </div>
              </div>
            </div>
        </div>`
    }
    queryBuilder+=`</div>`
    
    /*for (i=0,i<9;i++;){
        console.log(objeto[0].imagen)
        queryBuilder+=`${objeto[0].imagen}`

    }*/
    
   mostrador.innerHTML=queryBuilder
}

//Ordenar inicialmente por más reciente