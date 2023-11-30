window.onload = () =>{

  const users = document.getElementById("users");
  const flows = document.getElementById("flows");
  const wlf = document.getElementById("wlf");
  const wireframeslf = document.getElementById("wireframeslf");
  const wlfShow = document.getElementById("wlfShow");
  const links = document.querySelectorAll("a");
  const imgMostrar = document.getElementById("imgMostrar");
  const flowLink = document.getElementById("flowLink");    

  // flows.addEventListener("mouseover", () => {
  //   users.style.display = "block";
  
  // });
  // flows.addEventListener("mouseout", () => {
  //   users.style.display = "none";
  // });


    flowLink.addEventListener("click", () => {
      console.log(users.style.display)
        if(users.style.display === "" || users.style.display === "none"){
            users.style.display = "block";
        }else if(users.style.display === "block"){
            users.style.display = "none";
        }
    });


  // wlf.addEventListener("mouseover", () => {
  //   wlfShow.style.display = "block";
  
  // });
  // wlf.addEventListener("mouseout", () => {
  //   wlfShow.style.display = "none";
  // });

  wireframeslf.addEventListener("click", () => {
    if(wlfShow.style.display === "" || wlfShow.style.display === "none"){
        wlfShow.style.display = "block";
    }else if(wlfShow.style.display === "block"){
        wlfShow.style.display = "none";
    }
}
);

  links.forEach((link) => {
    link.addEventListener("click", () => {
    imgMostrar.src = link.dataset.src;
    if (link.dataset.src == "./img/DIAGRAMA INFORMACION.svg") {
      imgMostrar.style.width = "50%";
    }
      else if (link.dataset.src == "./img/SITE MAP PUNTAL.svg") {
        imgMostrar.style.width = "70%";
        imgMostrar.style.height = "auto";
      }
    console.log(link.dataset.src)
    });
  });

}
