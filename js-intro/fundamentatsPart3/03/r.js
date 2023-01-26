const input = document.querySelector('.input');
const para = document.querySelector('p');

function circumfrence (r) {
    return parseFloat(r) * 2.0 * Math.PI;
}

input.addEventListener("change", () => {
    const r = parseFloat(input.value);

    if (isNaN(r)) {
        para.textContent = "You need to enter a number";
    } else {
        para.textContent = `The circumfrence of the cirle with radius
        "${r}" is ${circumfrence(r)}.`;
    }
});