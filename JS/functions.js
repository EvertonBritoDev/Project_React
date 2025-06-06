var copo = window.document.getElementById("config-img1")
var card1 = window.document.getElementById("card1")
var card2 = window.document.getElementById("card2")
var card3 = window.document.getElementById("card3")
var goleft = window.document.getElementById("goleft")
var goright = window.document.getElementById("goright")

function changeImg (){
    copo.src = "./Imagens/img2.jpg"
}
function toRight(){
    card1.style = "display:none"
    card3.style = "display:block"
    card3.style = "display:flex"
    goright.style = "display:none"
    goleft.style = "display:flex; margin-top:55px"
}

function toLeft(){
    card1.style = "display:flex"
    card3.style = "display:none"
    goright.style = "display:flex"
    goleft.style = "display:none" 
}