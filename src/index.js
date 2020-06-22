
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
            render(material)
        })
        
    })
    .catch(err => console.log(err))
}

function render(material) {
    const materialMarkup = `
    <div data-id=${material.id}>
        <h3>${material.attributes.title}</h3>
        <p>${material.attributes.description}</p>
        <a href="${material.attributes.url}">${material.attributes.url}</a>
        <h6>Category: ${material.attributes.category.name}</h6>
        <button data-id=${material.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#material-container').innerHTML += materialMarkup
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
 //material object does not have category, data and category do not exist
 //         <p>${materialData.category.name}</p>
 console.log(material)
        const materialData = material
        const materialMarkup = `
        <div data-id=${material.id}>
            <h3>${materialData.title}</h3>
            <p>${materialData.description}</p>
            <p>${materialData.url}</p>
            <button data-id=${materialData.id}>edit</button>
        </div>
        <br><br>`

        document.querySelector("#material-container").innerHTML += materialMarkup
    })
}