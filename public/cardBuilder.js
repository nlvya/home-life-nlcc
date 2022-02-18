const sectionsContainerDOM = document.querySelector('.sections-container');

const url = "/api/v1/resources";

const showCards = async () => {
    try {
        const { data: {resources} } = await axios.get(url);
        console.log(resources)

        const resourceSectionsHTML = resources.map(resourceSection => {
            const {name, resources: resourcesList} = resourceSection;
            console.log(name, resourcesList);
            return `
                <section class="card-section" id="${name.split(' ').join('-').toLowerCase()}">
                    <h1 class="container-title">${name}</h1>
                    <div class="card-container">
                        ${resourcesList.map(resource => {
                            const {name, image, _id: id} = resource;
                            return `
                                <div class="card" style='background-image: url(${image})'>
                                    <a href="/resource?id=${id}">
                                        <h1 class="card-title">${name}</h1>
                                    </a>
                                </div>
                            `
                        }).join('')}
                    </div>
                </section>
            `
        }).join('')
        sectionsContainerDOM.innerHTML = resourceSectionsHTML;
    } catch (error) {
        console.log(error)
    }
}
showCards()