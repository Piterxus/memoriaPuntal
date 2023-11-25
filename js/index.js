window.onload = () =>{
   const userFlows = document.querySelector(".userFlows");
   let mostrarClicados = document.querySelector("#mostrarClicados");
   const imgs = document.querySelectorAll("img");
   console.log(imgs)
   imgs.forEach((img) => {
     img.addEventListener("click", () => {
       userFlows.style.display = "none";
      console.log(img)
      //  mostrarClicados.style.display = "block";
       mostrarClicados.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
       const botonVolver = document.createElement("button");
         botonVolver.innerHTML = "Volver";
         mostrarClicados.appendChild(botonVolver);
         botonVolver.addEventListener("click", () => {
            location.reload();
         });
    
     });
   });
}