
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
  


// let emptyInput = (input) => {
//   if (input.value === "") {
//     input.style.borderColor = "red";
//     return true;
//   } else {
//     input.style.borderColor = "green";
//   }
// };

// select.addEventListener("change", (e) => {
//   if (e.target.value === "Seleccione categoria") {
//     divTotal.textContent = "Total a pagar: $";
//   }
//   total(cantidad.value, e.target.value, divTotal);
// });

// cantidad.addEventListener("input", (e) => {
//   total(cantidad.value, select.value, divTotal);
// });

// resume.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     !emptyInput(name) &&
//     !emptyInput(surname) &&
//     !emptyInput(email) &&
//     !emptyInput(cantidad)
//   ) {
//     Swal.fire({
//       icon: "success",
//       title: "Gracias por realizar tu compra",
//       html: `<p>${name.value} ${surname.value}</p>
//       <p>Hemos enviado la informacion a: ${email.value}</p>
//       <p>${divTotal.textContent}</p>`,
//       confirmButtonText: "Continuar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         window.location.href = "./index.html";
//       }
//     });
//   }
// });


