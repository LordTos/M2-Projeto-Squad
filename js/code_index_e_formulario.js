const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const chk = document.getElementById('chk')

hamburger.addEventListener('click', () => {
  //Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Animation
  hamburger.classList.toggle("toggle");
});

// Checar modo escuro ao carregar a página // 
function checar_modo_escuro() {
  if (window.localStorage.getItem('modo_noturno') == "ligado") {
    document.getElementById("ball").click()
    alert("FOI LIGADO");
    return "ligado";
  }
  else {
    window.localStorage.setItem('modo_noturno', 'desligado');
    alert("FOI DESLIGADO");
    return "desligado";
  }
}


// Registrar estado do modo escuro ao clicar no botão // 
chk.addEventListener('change', () => {
  if (window.localStorage.getItem('modo_noturno') == "ligado") {
    window.localStorage.setItem('modo_noturno', 'desligado')
  }
  else{
    window.localStorage.setItem('modo_noturno', 'ligado')
  }

});




// Alterar modo escuro // 
chk.addEventListener('change', () => {

  document.body.classList.toggle('dark')


  // ############################################ ORLANDO ############################################ //
  document.getElementById("container").classList.toggle('dark')
  // ############################################ ORLANDO ############################################ //

});