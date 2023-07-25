let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

document.getElementById("Sbutton").addEventListener("click", openPopup);

document.getElementById("Cbutton").addEventListener("click", closePopup);