// async function
const fetchAsync = async () => {
  // await response of fetch call
  let response = await fetch("../citations.json");
  // only proceed once promise is resolved
  let data = await response.json();
  // calcul alÃ©atoire et implÃ©mentation de la citation au chargement de la page
  var randomNum = Math.floor(Math.random() * data.length);
  document.getElementById("quote").innerHTML = data[randomNum];
  // console.log("random",randomNum, "citations", data[randomNum]);
  return data[randomNum];
};

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

// //je ne connais pas ton ficher script.js actuel mais on peut rajouter une focntion pour les actualite-content
// function truncateAndSetText(content, elementId, defaultLength = 190) {
//     let length;
//     if (window.innerWidth >= 400) {
//         length = defaultLength;
//     } else {
//         /* the view port is less than 400 pixels wide */
//         length = 120;
//     }
//     var truncatedText = content.slice(0, length) + "...";
//     const element = document.getElementById(elementId);
//     element.textContent = truncatedText;

//     // Ajustez la largeur du dégradé en fonction de la longueur du texte
//     const textLength = truncatedText.length;
//     const gradientWidth = Math.min(30, textLength * 0.1); // Ajustez le facteur selon vos besoins

//     // Appliquez la largeur calculée au pseudo-élément ::after
//     element.style.setProperty('--gradient-width', `${gradientWidth}%`);
//     element.classList.add('fade-text');
// }


// function truncateAndSetText(content, elementId, maxLength = 125) {
//     const element = document.getElementById(elementId);
//     let truncatedText = content;
// //     let length;
// //     if (window.innerWidth >= 400) {
// //         length = defaultLength;
// //     } else {
// //         /* the view port is less than 400 pixels wide */
// //         length = 120;
// //     }
//     if (content.length > maxLength) {
//         truncatedText = content.slice(0, maxLength) + "...";
//     }

//     element.textContent = truncatedText;
//     element.classList.add('fade-text');

//     // Ajustez la position du pseudo-élément ::after
//     const gradientWidth = 120; // Largeur fixe du dégradé
//     const textWidth = element.offsetWidth;
//     element.style.setProperty('--gradient-width', `${gradientWidth}px`);
//     element.style.setProperty('--text-width', `${textWidth}px`);
// }


function truncateAndSetText(content, elementId, defaultLength = 170) {
    let maxLength;
    if (window.innerWidth >= 400) {
        maxLength = defaultLength;
    } else {
        maxLength = 120;
    }

    let truncatedText = content;
    if (content.length > maxLength) {
        truncatedText = content.slice(0, maxLength) + "...";
    }

    const element = document.getElementById(elementId);
    element.textContent = truncatedText;
    element.classList.add('fade-text');
}







const actu1 = "David contre Goliath (1 S 17), c’est l’histoire d’un adolescent qui renverse un géant par son courage, son intelligence et surtout sa foi. En 1989, cela s’est produit sur la terre battue de Roland Garros. Fils ";
// truncateAndSetText(actu1, "actu-text-1");

const actu2 = "Edito : Dieu ne prend pas de vacances, la vie de l’Eglise non plus. L’été arrive, avec, pour certains, des perspectives de farniente, de repos bienvenus, ici ou au loin.";
// truncateAndSetText(actu2, "actu-text-2");

const actu3 = "Exposition Alexis Muston : Pasteur, dessinateur, médecin, écrivain, historien, républicain, Alexis Muston a marqué notre territoire";
// truncateAndSetText(actu3, "actu-text-3");


// Fonction pour appliquer la troncature à tous les textes
function applyTruncation() {
    truncateAndSetText(actu1, "actu-text-1");
    truncateAndSetText(actu2, "actu-text-2");
    truncateAndSetText(actu3, "actu-text-3");
}


// Appliquer la troncature au chargement de la page
document.addEventListener("DOMContentLoaded", applyTruncation);
// Appliquer la troncature lors du redimensionnement de la fenêtre
window.addEventListener("resize", applyTruncation);