const cardContainerDOM = document.querySelector('.card-container');

const url = "/api/v1/resources";

const showCards = async () => {
    try {
        const { data: {resources} } = await axios.get(url);
        console.log(resources)
        const resourceCards = resources.map(resource => {
            const {name,card_image, _id: id} = resource;
            return `
                <div class="card">
                    <a href="/resource?id=${id}">
                        <img src="${card_image}" alt="Being Single">
                        <h1 class="card-title">${name}</h1>
                    </a>
                </div>
            `
        }).join('')
        cardContainerDOM.innerHTML = resourceCards;
    } catch (error) {
        console.log(error)
    }
}
showCards()