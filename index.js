
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
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const urlInput = document.querySelector('#input-url').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, urlInput, categoryId)
}

function postFetch(title, description, url, category_id) {
    const bodyData = {title, description, url, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(material => {
        const materialData = material.data.attributes
        
        const materialMarkup = `
        <div data-id=${material.id}>
            <h3>${materialData.title}</h3>
            <p>${materialData.description}</p>
            <p>${materialData.url}</p>
            <p>${materialData.category.name}</p>
            <button data-id=${materialData.id}>edit</button>
        </div>
        <br><br>`


    })
}