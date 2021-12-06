const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function setName(name) {
    linkName.innerText = "welcome, ";
    let nameInner = document.createElement("span");
    nameInner.innerText = name;
    nameInner.setAttribute("class", "name");
    linkName.appendChild(nameInner);
    return nameInner;
}

nameInput.addEventListener("change", () => {
    setName(nameInput.value);
})