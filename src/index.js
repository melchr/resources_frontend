
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
            
            let newMaterial = new Material(material, material.attributes)
            
            document.querySelector('#material-container').innerHTML += newMaterial.renderMaterialCard()
        })
        
    })
    //.catch(err => console.log(err))
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
        ///debugger
 //material object does not have category, data and category do not exist, but it does have a category_id. why does it lose access to those here?
 //changed category.id to category_id
 //         <p>${materialData.category.name}</p>
 console.log(material)
        const materialData = material
        const materialMarkup = `
        <div data-id=${material.id}>
            <h3>${materialData.title}</h3>
            <p>${materialData.description}</p>
            <p>${materialData.url}</p>
            <p>${materialData.category_id}</p>
            <button data-id=${materialData.id}>edit</button>
        </div>
        <br><br>`

        document.querySelector("#material-container").innerHTML += materialMarkup
    })
}