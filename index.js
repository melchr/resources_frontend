
const endPoint = "http://localhost:3000/api/v1/materials"

document.addEventListener('DOMContentLoaded', () => {
    getMaterials()

    const createMaterialForm = document.querySelector("#create-material-form")

    createMaterialForm.addEventListener("submit", (e) => createFormHandler(e))
});

function getMaterials() {
    fetch(endPoint)
    .then(response => response.json())
    .then(materials => {
        materials.data.forEach(material => {
            // refactor below
            const materialMarkup = `
            <div data-id=${material.id}>
                <h3>${material.attributes.title}</h3>
                <p>${material.attributes.description}</p>
                <p>${material.attributes.url}</p>
                <p>${material.attributes.category.name}</p>
                <button data-id=${material.id}>edit</button>
            </div>
            <br><br>`;

            document.querySelector('#material-container').innerHTML += materialMarkup
        })
        
    })
}

function createFormHandler(e) {
    e.preventDefault()
}