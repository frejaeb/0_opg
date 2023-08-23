let alkohol = "indeholder alkohol";
let alkoholFri = "alkoholfri";


const minKnap = document.querySelector("#knapElement");

minKnap.addEventListener("click", functionDerKaldesVedKlik);

function functionDerKaldesVedKlik() {
  console.log("du har klikket på knappen");
}




if(alkohol){
    console.log("indeholder alkohol");
   
}
else{
    console.log("alkoholfri")
}