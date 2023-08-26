window.addEventListener('submit', submit)

const one = document.getElementById("1");

const form = document.getElementById("before");
const submitted = document.getElementById("after");
const rate = document.getElementById("rate");

function submit(event) {
if (form.style.display == "block") {
    form.style.display = "none";
    submitted.style.display = "block";
    event.preventDefault();
}

rate.innerHTML = document.querySelector('input[name="rating"]:checked').value;
};


