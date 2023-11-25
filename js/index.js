window.onload = () =>{
  const roleLinks = document.querySelector(".roleLink");
  const flowLink = document.getElementById("flowLink");
  const users = document.getElementById("users");
  const flows = document.getElementById("flows");
  const links = document.querySelectorAll("a");
  const imgMostrar = document.getElementById("imgMostrar");    

  flows.addEventListener("mouseover", () => {
    users.style.display = "block";
  
  });
  flows.addEventListener("mouseout", () => {
    users.style.display = "none";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
    imgMostrar.src = link.dataset.src;
    if (link.dataset.src == "./img/DIAGRAMA INFORMACION.svg") {
      imgMostrar.style.width = "50%";
    }
    console.log(link.dataset.src)
    });
  });

}
