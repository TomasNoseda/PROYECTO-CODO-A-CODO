
let tipoServicio
let selecServicio = document.querySelector("#selectSer");
let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");

let servicio = (servicio) => {
    if (servicio === "1") {
        tipoServicio = 1500
      }
    
      if (servicio === "2") {
        tipoServicio = 1800
      }
    
      if (servicio === "3") {
        tipoServicio = 2800

      }

      if (servicio === "4") {
        tipoServicio = 2500

      }

}



let total = (categoria, tipoServicio, div) => {
    let totalConDescuento;
    if (categoria === "1") {
      totalConDescuento = tipoServicio * 0.90;
    }
  
    if (categoria === "2") {
      totalConDescuento = tipoServicio * 0.85;
    }
  
    if (categoria === "3") {
        totalConDescuento = tipoServicio * 0.80;
    }
    
    div.textContent = `Total a pagar: $ ${totalConDescuento}`;
    
    return totalConDescuento;
};

// EVENTOS

  select.addEventListener("change", (e) => {
    if (e.target.value === "Seleccione categoria") {
      divTotal.textContent = "Total a pagar: $";
    }
    
    servicio(selecServicio.value);
    
    total(select.value, tipoServicio, divTotal);
  });
  
  selecServicio.addEventListener("change", (e) => {
    servicio(e.target.value);
    total(select.value, tipoServicio, divTotal);
});
  

btn_borrar.addEventListener('click',()=>{divTotal.textContent = "Total a pagar: $";});

btn_solicitar_turno.addEventListener('click',()=>{alert('Su Turno se ha registrado correctamente, en breve nos estaremos comunicando con usted')})

