let sayi = 0;
let h1 = document.getElementById("h1");
let ekle = document.getElementById("b1");
let eksilt = document.getElementById("b2");
let b3 = document.getElementById("b3");

h1.textContent = sayi;

ekle.onclick = () => islm("ekle");
eksilt.onclick = () => islm("eksilt");

b3.onclick = () => {
  h1.textContent = '';
  sayi = 0;
  window.localStorage.setItem("sayi", sayi);
};

function islm(buttonType) {
  if (buttonType === "ekle") {
    h1.textContent = sayi += 1;
  } else {
    h1.textContent = sayi -= 1;
  }
  window.localStorage.setItem("sayi", sayi);
}

window.onload = () => {
  let savedSayi = window.localStorage.getItem("sayi");
  if (savedSayi !== null) {
    sayi = parseInt(savedSayi);
    h1.textContent = sayi;
  }
}; 