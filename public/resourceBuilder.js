const params = window.location.search
const resourceId = new URLSearchParams(params).get('id');
const resourceName = new URLSearchParams(params).get('name');
const url = "/api/v1/resources";

console.log(resourceId)
console.log(resourceName)

const containerDOM = document.querySelector('#container');

const showResource = async () => {
    try {
        const { data: {resource} } = await axios.get(`${url}/${resourceId}?name=${resourceName}`)
        const {resources} = resource;
        
        
        const resourceInfo = resources.filter((source) => { return source.id == resourceName })
        const {content, image} = resourceInfo[0];
        const resourceHTML = content.map(elem => {
            console.log('new elem')
            const {class: className, headers, paragraphs, background} = elem;
            return `
                <div class="${className}" ${background[0] ? `style='background-image: url(${image})'` : ''}>
                    ${headers.map(head => {
                        return `
                            <h1>${head}</h1>
                        `
                    }).join('')}
                    ${paragraphs.map(par => {
                        return `
                            <p>${par}</p>
                        `
                    }).join('')}
                </div>
            `
        }).join('')
        containerDOM.innerHTML = resourceHTML;
    } catch(error) {
        console.error(error)
    }
}
showResource();