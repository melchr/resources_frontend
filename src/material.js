class Material {
//all of these things show properly in debugger but still says Uncaught TypeError: Cannot read property 'title' of undefined when i type new Material(material)
    constructor(material, materialAttributes) {
        this.id = material.id
        //debugger
        this.title = materialAttributes.title
        this.description = materialAttributes.description
        this.url = materialAttributes.url
        this.category = materialAttributes.category
        Material.all.push(this)
    }
}

Material.all = [];