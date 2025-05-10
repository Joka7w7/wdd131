const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

const lastModParagraph = document.getElementById("lastModified");
if (lastModParagraph) {
    lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
}
