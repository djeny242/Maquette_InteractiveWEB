

const bouton = document.getElementById("btn3");
function downloadPDF() {
  const element = document.getElementById("container");
  html2pdf()
    .from(element)
    .save("Mon CV.pdf") ;  // .then(() => {
    //   if (localStorage.getItem("count")) {
    //     count = +localStorage.getItem("count");
    //   }
    //   count += 1;
    //   localStorage.setItem("count", count);
    //   counter.innerText = localStorage.getItem("count");
    // });
}

bouton.addEventListener("click" , downloadPDF);
