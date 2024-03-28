// async function
const fetchAsync = async() =>{
    // await response of fetch call
    let response = await fetch('/citations.json');
    // only proceed once promise is resolved
    let data = await response.json();
    // calcul alÃ©atoire et implÃ©mentation de la citation au chargement de la page
 var randomNum = Math.floor(Math.random() * data.length);
     document.getElementById("quote").innerHTML = data[randomNum];
    // console.log("random",randomNum, "citations", data[randomNum]);
    return data[randomNum];
 }



 var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}