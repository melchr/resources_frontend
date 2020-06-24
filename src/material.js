class Material {
//i don't think data is a real thing here. category_id is all that is accessible
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.url = data.url
        this.category = data.category
    }
}