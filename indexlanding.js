const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear();
};

// Función que agrega el año actual al Footer
const setYearIdentifierSpan = () => {
  const printYearInDOM = document.getElementById("yearIdentifier");
  printYearInDOM.innerText = getCurrentYear();
};


// Arreglo de Redes sociales
const SocialNetworks = [
  { name: "Twitter", url: "https://twitter.com/home", icon: "" },
  { name: "Facebook", url: "https://www.facebook.com/", icon: "" },
  { name: "Linkedin", url: "/linkedin", icon: "" },
];


// Función que ejecuta todo el proceso de creación de red social y lo inyecta en el HTML
function setSocialNetworksInHTML() {
  const tagSocialNetworks = document.getElementById("socialNetworks");
  var innerHtmlSocialNetworks = "";
  SocialNetworks.forEach((social) => {
    let socialTemp;
    if (social.name === "Twitter") {
      socialTemp = `<div class= "fa-2x">
      <span class="social--burbble" style="background-color: #0EAADC;">${social.name}
      <a href="${social.url}" class="fa fa-twitter"></a></span>
      </div><p>`
      ;
    } else if (social.name === "Facebook") {
      socialTemp = `<div class= "fa-2x">
      <span class="social--burbble" style="background-color: #0E59DC;">${social.name}
      <a href="${social.url}" class="fa fa-facebook"></a></span>
      </div><p>`;
    } else if (social.name === "Linkedin") {
      socialTemp = `<div class= "fa-2x">
      <span class="social--burbble" style="background-color: #2956CF;">${social.name}
      <a href="${social.url}" class="fa fa-linkedin"></a></span>
      </div><p>`;
    } 

    innerHtmlSocialNetworks = innerHtmlSocialNetworks + socialTemp;
  });
  tagSocialNetworks.innerHTML = innerHtmlSocialNetworks;
}

/* Esto hará (concatenación)
"<span>Twitter</span> <span>Facebook</span><span>Linkedinr</span>" */

//Agregando proyectos:

const listaProyectos = [
  {
    name: "Portafolio",
    descripcion: "Proyecto actual.",
    imagen: "https://i.pinimg.com/736x/d4/5e/67/d45e679155756999d36407f13b28dd98.jpg",
    url: "https://github.com/diana-sen",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "5 días",
  },
  {
    name: "Tienda de celulares",
    descripcion: "Proyecto en el que se muestra el costo  + impuesto de celulares.",
    imagen: "https://www.tuexpertomovil.com/wp-content/uploads/2022/01/galaxy-s21-fe-samsung-1.jpeg",
    url: "https://github.com/diana-sen",
    tecnologias: ["Html", "JS"],
    tiempoDesarrollo: "10 días",
  },
  {
    name: "Múltiplos de 5",
    descripcion: "Programa que muestra los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario",
    imagen: "https://i.pinimg.com/736x/d3/4d/b9/d34db9c3f9711348d350e5176c3b08c3.jpg",
    url: "https://github.com/diana-sen",
    tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
    tiempoDesarrollo: "10 días",
  },

  {
    name: "Clon de Google ",
    descripcion: "Clon de la página principal de Google",
    imagen: "https://i.pinimg.com/originals/45/ae/f4/45aef4a1994b549cd54a4a325ae0cde8.jpg",
    url: "https://github.com/diana-sen",
    tecnologias: ["Html", "CSS"],
    tiempoDesarrollo: "1 semana",
  },

  {
    name: "Clone de Netflix",
    descripcion: "Clon del login y página principal de Netflix",
    imagen: "https://consideringapple.com/wp-content/uploads/2021/07/Netflix-icon-1024x1024.png",
    url: "https://github.com/diana-sen/clone-netflix",
    tecnologias: ["Html", "CSS"],
    tiempoDesarrollo: "2 semanas",
  },

  {
    name: "Well Up ",
    descripcion: "Propuesta de aplicación con la temática de Well being, utilizando no-code tools",
    imagen: "https://consideringapple.com/wp-content/uploads/2021/07/Netflix-icon-1024x1024.png",
    url: "https://devf.mx/hackfest-ganador-01/",
    tecnologias: ["FlutterFlow", "Canvas"],
    tiempoDesarrollo: "2 semanas",
  },
];

function setProyectosDesarrollados() {
  let card = "";
  listaProyectos.forEach((project) => {
    card = card +
      ` <div class="col">
          <div class="card shadow-sm"> 
            
            <div class="card-body">
              <h5 class="card-title">${project.name}</h5>
              
              <img src="${project.imagen}" class="card-img-top">
              <p class="card-text">${project.descripcion}</p>
              <div class="buttonCenter">
                <div class="btn-group">
                  <button onclick="location.href='${project.url}' " type="button" class="btn btn-sm btn-info">Ver código</button>
                </div>
              </div>
              <div class="row">
                ${setIcons(project.tecnologias)}
                
              </div>
            </div>
          </div>
        </div>`
  });
  document.getElementById("projects").innerHTML = card;
}



function setIcons(tecnologias) {
  let iconos = "";
  tecnologias.forEach((tec) => {
    switch (tec) {
      case "Html":
        iconos = iconos + `<div class="col-3">
                          HTML 5 <i class="fa-brands fa-html5"></i>
                          </div>`
        break;
      case "CSS":
        iconos = iconos + `<div class="col-3">
                      CSS <i class="fa-brands fa-css3"></i>
                      </div>`
        break;
      case "JS":
        iconos = iconos + `<div class="col-3">
                        JS <i class="fa-brands fa-js"></i>
                        </div>`
        break;

      case "Bootstrap":
        iconos = iconos + `<div class="col-3">
                    Bootstrap  <i class = "fa-brands fa-bootstrap"></i>
                    </div>`
        break;
    }
    
  }
   
  )
  return iconos;
}

var j=0,text1;
text1 = "Estoy empezando mi carrera en Desarrollo Web, te presento mi avance."

function typing() {
  if(j<=text1.length){
    document.getElementById("text1").innerHTML += text1.charAt(j);
    j++;
    setTimeout(typing,80);

  } else {
    j =0;
    //document.getElementById("text1").innerHTML = "";
    setTimeout(()=>{
    document.getElementById("text1").innerHTML = "";
    typing();  
    },2000);
  }  
}

//typing();



// Pila de ejecución hasta que el DOM esta completamente cargado
document.addEventListener("DOMContentLoaded", function (e) {
  setYearIdentifierSpan();
  setSocialNetworksInHTML();
  setProyectosDesarrollados();
  typing();
});


/*
document.addEventListener("DOMConentLoaded", function(event) {
 // console.log("DOM fully loaded and parsed");
  const printYearInDOM = document.getElementById("yearIdentifier");
  printYearInDOM.innerText = getCurrentYear();
  // si le pusieramos setInterval, eso nos permitiriía ejecutar cada ciertos segundos
});

*/

//console.log(getCurrentYear());

//que es una instancia de una clase=
// Es una lllamada a un se de funciones, características entre
//otras cosas que me permiten reutilizar métodos
//funciones o procesos de otros modulos ya desarrollados anteriormente
//o de librerías de terceros o externas

// POO -> Programación orientada a objetos

// Función anonima: Función que se
// ejecuta pero que no tiene un nombre establecido
// me permite hacer acciones sin declarar un nombre a la función

// Ejemplos de iteracion con For y Foreach
// const listaSuper = ["refresco", "agua", "jabon", "fruta"];

// for (let i = 0; i < listaSuper.length; i++) {
//   console.log(`Item: ${listaSuper[i]} comprado`);
// }

// listaSuper.forEach((productp) => {
//   console.log(`Item: ${productp} comprado`);
// });