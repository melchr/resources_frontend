class Material {
//i don't think data is a real thing here. category_id is all that is accessible
    constructor(material, materialAttributes) {
        this.id = material.id
        this.title = materialAttributes.title
        this.description = materialAttributes.description
        this.url = materialAttributes.url
        this.category = materialAttributes.category
    }
}