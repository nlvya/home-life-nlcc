const params = window.location.search
const resourceId = new URLSearchParams(params).get('id');
const url = "/api/v1/resources";

// console.log(resourceId)
// console.log(resourceName)

const containerDOM = document.querySelector('#container');

const showResource = async () => {
    try {
        console.log(resourceId)
        const { data: {resource} } = await axios.get(`/api/v1/resources/${resourceId}`)
        // const {resources} = resource;
        console.log(resource)
        
        const {content, image} = resource;
        const resourceHTML = content.map(elem => {
            // console.log('new elem')
            const {class: className, headers, paragraphs, background} = elem;
            // console.log(background)
            return `
                <div class="${className}" ${background[0] ? `style='background-image: url(${background[1]})'` : ''}>
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