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