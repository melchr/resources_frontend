
const indexRequest = "http://localhost:3000/api/v1/materials"

document.addEventListener('DOMContentLoaded', () => {
    fetch(indexRequest)
    .then(response => response.json())
    .then(materials => {
        console.log(materials)
    })
});