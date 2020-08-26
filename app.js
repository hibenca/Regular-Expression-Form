document.getElementById('name').addEventListener("blur", addClass);

function addClass() {
    document.getElementById('name').classList.add("is-invalid");
}