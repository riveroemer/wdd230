// Hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Determines current year so it can be placed in the footer.
const options = {
    year: "numeric"
}
const currentyear = new Date().toLocaleDateString("en-US", options);
document.querySelector("#currentyear").innerHTML = `&copy; ${currentyear} ║ Emer Rivero ✧ ║ Yucatan`;

// Determines when the file was last modified.
document.getElementById("lastmodified").innerHTML = `Last modified: ${document.lastModified}`;