class Material {
//all of these things show properly in debugger but still says Uncaught TypeError: Cannot read property 'title' of undefined when i type new Material(material)
    constructor(material, materialAttributes) {
        this.id = material.id
        this.title = materialAttributes.title
        this.description = materialAttributes.description
        this.url = materialAttributes.url
        this.category = materialAttributes.category
        Material.all.push(this)
    }

    renderMaterialCard() {
        debugger
        return `
        <div data-id=${this.id}>
            <h3>${this.title}</h3>
            <p>${this.description}</p>
            <a href="${this.url}">${this.url}</a>
            <h6>Category: ${this.category.name}</h6>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }

}

Material.all = [];