

const bouton = document.getElementById("btn3");
function downloadPDF() {
    const element = document.getElementById("container");
    html2pdf()
        .from(element)
        .save("Mon CV.pdf");  // .then(() => {
    //   if (localStorage.getItem("count")) {
    //     count = +localStorage.getItem("count");
    //   }
    //   count += 1;
    //   localStorage.setItem("count", count);
    //   counter.innerText = localStorage.getItem("count");
    // });
}
const bntChangerCouleur = document.getElementById("btn2");
bouton.addEventListener("click", downloadPDF);

const changerCouleur = (couleur) => {
    bntChangerCouleur.addEventListener("click", () => {
        document.documentElement.style.setProperty('--bg-color', couleur);
    })

}
