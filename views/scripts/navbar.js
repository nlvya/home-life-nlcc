const menuButtonDOM = document.querySelector('.menu-button');
const linksDivDOM = document.querySelector('.links');
const barsDOM = document.querySelector('.fa-bars')

menuButtonDOM.addEventListener('click', () => {
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
})

const scrollToElement = (elementId) => {
    const element = document.querySelector(elementId);
    // console.log(element)
        // scroll to element
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    element.scrollTop -= 100;
        // close navigation
    linksDivDOM.classList.toggle("closed");
    barsDOM.classList.toggle("open");
}

const showLinks = async () => {
    try {
        const { data: {resources} } = await axios.get('api/v1/resources');
        // console.log(resources)

        const allCategories = [... new Set(resources.map(resource => resource.category))]

        const resourceSectionsHTML = allCategories.map(resourceSection => {
            const linkId = resourceSection.split(' ').join('-').toLowerCase();
            return `
                <li class="nav-item link" onclick="scrollToElement('#${linkId}')">${resourceSection}</li>
            `
        }).join('')
        linksDivDOM.innerHTML = resourceSectionsHTML;
        linksDivDOM.innerHTML += '<li class="nav-item icon"><a href="https://www.newlifeonline.com/"><i class="material-icons home-icon">home</i></a></li>';
    } catch (error) {
        console.log(error)
    }
}
showLinks();