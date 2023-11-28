window.onload = () =>{

  const users = document.getElementById("users");
  const flows = document.getElementById("flows");
  const wlf = document.getElementById("wlf");
  const wlfShow = document.getElementById("wlfShow");
  const links = document.querySelectorAll("a");
  const imgMostrar = document.getElementById("imgMostrar");    

  flows.addEventListener("mouseover", () => {
    users.style.display = "block";
  
  });
  flows.addEventListener("mouseout", () => {
    users.style.display = "none";
  });
  wlf.addEventListener("mouseover", () => {
    wlfShow.style.display = "block";
  
  });
  wlf.addEventListener("mouseout", () => {
    wlfShow.style.display = "none";
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
